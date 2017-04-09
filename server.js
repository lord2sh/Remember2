var express = require('express');
var session = require('express-session'); // 세션정보는 메모리에 저장함
var qs = require('querystring');
var app = express();
var indexpage = require('fs').readFileSync('Untitled.html');
var settingpage = require('fs').readFileSync('client.html');
const enableWs = require('express-ws');
var fs = require('fs');

var assert = require('assert');
var url = "mongodb://dbuser:dbuser@ds139288.mlab.com:39288/note";
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({ username:String });
var User = mongoose.model('user', userSchema);

var noteSchema = new Schema({ username:String, index:Number, title:String, remain:Number, total:Number });
var Note = mongoose.model('note', noteSchema);
var qSchema = new Schema({ username:String, index:Number, question:String, answer:String, weight:Number });
var Question = mongoose.model('question', qSchema);

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
 
mongoose.connect(url);
enableWs(app);

var sessionParser = session({
  secret: '1@%24^%$3^*&98&^%$', // 쿠키에 저장할 connect.sid값을 암호화할 키값 입력
  resave: false,                                   //세션 아이디를 접속할때마다 새롭게 발급하지 않음
  saveUninitialized: true,                   //세션 아이디를 실제 사용하기전에는 발급하지 않음
      //store   : new storage({ client : conn, cleanup: false }),
  cookie  : { maxAge  : new Date(Date.now() + (60 * 1000 * 30)) }
});
app.use(sessionParser);

//console.log(__dirname+'public');
app.use(express.static(__dirname));
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"note"));

app.listen(3000, function(){
  console.log('Connected 3000 port');
});



// 웹소켓 ---- 데이터 요청 -----------------------------
app.ws('/echo', (ws, req) => {
    ws.on('message', msg => {
    	var receive = JSON.parse(msg);
    	// ----------------노트목록 요청
    	if(receive.command == 'getnotelist')
    	{
    		var username = receive.id;
    		console.log("getnotes"+username);
	    	Note.find({'username': username }, function(err, notes){
		        if(err) {ws.send(""); console.log(err.toString()); return;}
		        //console.log(JSON.stringify(notes));
		        ws.send(JSON.stringify(notes));
	    	});
	    	
        }
        // ----------------퀴즈 요청 
        else if(receive.command == 'gettable'){
			var name = receive.username;
			var page = receive.index;
			console.log("getnoes" + name + page);
			var query = {"username" : name, "index":page};
			Question.find(query, function(err, questionlist){
		    	if(questionlist){ 
		    		ws.send(JSON.stringify(questionlist));
		    	}
		  	});
		}
		else if(receive.command == 'clearTable'){
			//console.log('dd');
			var name = receive.username;
			var page = receive.index;
			//console.log(receive.command + ' ' + name + ' ' + page);
			
			var query = {"username" : name, "index":page};
			Question.find(query, function(err, questionlist){
		    	if(questionlist){
		    		for(var i = 0; i < questionlist.length; i++) { 
		    			questionlist[i].weight = 4;
		    			questionlist[i].save(function(err){});
		    		}
		    	}
		    	Note.findOne(query, function(err, note){
		 			if(note){
		 				note.remain = note.total;
		 				note.save(function(err){ws.send('dd');});
		 			}
		 		});
		 	});
		}
		else if(receive.command == 'setweight')
		{
			//console.log(receive.command + ' ' + receive.id + ' ' + receive.weight);

			//var name = 0;//receive.username;
			//var page = 0;//receive.index;
			var qid = receive.id;
			var weight = receive.weight;
			
			//console.log(qid);
			
			var query = {"_id":qid};
			Question.findOne(query, function(err, qna){
		    	if(!err && qna){ 
		    		qna.weight = weight;
		    		qna.save(function(err){
		    			if(!err)
		    			{
		    				var name = qna.username;
		    				var page = qna.index;
		    				if(weight == 0){
		  						Note.findOne({"username": name, "index" : page }, function(err, note){
		 							if(note){
		 								note.remain--;
		 								note.save(function(err){ws.send('completed');});
		 							}
		 						});
		 					}
		 				}
		 			});
		 		}
		 	});
        }
    })
    ws.on('close', () => {
        console.log('WebSocket was closed')
    })
});

// --------------- 세팅버튼클릭, 세팅화면
app.get('/settings/?:pageindex', function(req,res){
	req.session.username = 'Oh';
	if(req.session.username) {		
		var title = "";
		var qnalist = "";
		var page = req.params.pageindex;
		if(page >= 0 && page <= 7) {
			var clientpage = settingpage.toString();

			// get data.
			var query = {"username" : req.session.username, "index":page};
			Note.findOne(query, function(err, findnote){
	        	if(findnote){ 
	        		title = findnote.title;
	        	}
	        	Question.find(query, function(err, questionlist){
		    		if(questionlist){ 
		        		qnalist = "";
		        		for(var i = 0; i < questionlist.length; i++){
		        			qnalist += (questionlist[i].question + ":" + questionlist[i].answer +"\r\n");
		        		}
		        	}
		       		else {
		        		qnalist = "q1:a1\r\nq2:a2...";
		        	}
		        	
		        	clientpage = clientpage.replace("{0}", title);
					clientpage = clientpage.replace("{1}", qnalist);	
					res.writeHeader(200, {"Content-Type" : 'text/html; charset=utf-8'});
					res.end(clientpage);
		        });
		  	});	
		}
		else {
			res.redirect('/note/'+req.session.username);
		}
	}
	else {
		res.setHeader("Content-Type", 'text/html; charset=utf-8');
		res.end("Login please");
	}
});


// ---------------메인 화면 -----------------
app.get('/note/?:username', function(req,res){
	// db에서 유저를 찾는다.
	User.findOne({username : req.params.username}, function(err, finduser){
		if(err) return res.status(500).json({error: err});	// 연결실패???
		if(!finduser) return res.status(404).json({error: 'user not found'}); // 유저를 못 찾은경우 
		req.session.username = req.params.username; //로그인 성공 
		req.session.save(function(){
			res.setHeader("Content-Type", 'text/html; charset=utf-8');		
			res.end(indexpage);
		});
	});
});

// ---------------로그아웃 -----------------
app.get('/logout', function(req, res){
    if(req.session.username){
        req.session.destroy(function(err){
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/note/noone');
            }
        })
    }
    else{
    	res.redirect('/note/noone');
    }
});

// ---------------세팅화면, 데이터 입력 DB에 저장하기. -----------------
app.post('/upload/?:pageindex', function(req, res){
	req.session.username = 'Oh';
	//req.setCharacterEncoding("UTF-8");
	if(req.session.username) {
		var data = '';
		req.on('data', function(chunk) {
			data += chunk;
		})
		.on('end', function () {
            var post = qs.parse(data);
			
			// 기존 테이블 데이터 삭제.
			// username, pageindex로 검색하여 모두 삭제.
			var query = {
		    	username: req.session.username,
		    	index : req.params.pageindex
		  	};
		
		  	Note.remove(query, function(err, result) {
		    	//if(err) { throw err; }
		  	});
		  	Question.remove(query, function(err, result) {
		    	//if(err) { throw err; }
		  	});		  
  
			// paser data.comment.
			var lines = post.comment.split("\r\n");			
			var totalcount = 0;
			var succeesscount = 0;
			for(var i = 0; i < lines.length; i++) {
				var line = lines[i];
				var qna = line.split(':');
				if(qna.length == 2){
					var qnadata = new Question();
					qnadata.question = qna[0];
					qnadata.answer = qna[1];
					qnadata.weight = 4;
					qnadata.username = req.session.username;
					qnadata.index = req.params.pageindex;
					qnadata.save(function(err){succeesscount++;});
					totalcount++;
				}
			}
			var titleData = new Note();
			titleData.title = post.title;
			titleData.remain = totalcount;
			titleData.total = totalcount;
			titleData.index = req.params.pageindex;
			titleData.username = req.session.username;
			titleData.save(function(err){
				var delay = 1000;
				var start = new Date().getTime();
				//console.log(start);

				while(totalcount > succeesscount)
				{
					if(new Date().getTime() > start + delay)
					{
						break;
					}
					//delay++;
				}
				
				
				res.redirect('/note/'+req.session.username);
			});
			
			// save titleData, qnalist to DB
			// 
			
		})
	}
});


/*
app.post('/upload/?:page', function(req, res, next){

	var incoming = new formidable.IncomingForm();
	incoming.uploadDir = 'uploads';
	incoming
	.on('file', function(field, file) {
		if(!file.size) { return; }
	})
	.on('end', function(){
		
	});
	incoming.parse(req);
	    
});*/




