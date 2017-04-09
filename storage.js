'use strict';

var async = require('async');
var formidable = require('formidable');
var fs = require('fs');
var util = require('util');
var api = require('./common');

exports.upload = function (req, res) {

  console.log("I am here");

  var form = new formidable.IncomingForm(),
    files = [],
    fields = [];

  form.uploadDir = "./uploads";

  form
    .on('field', function (field, value) {
      console.log(field, value);
      fields.push([field, value]);
    })
    .on('error', function (err) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.end('error:\n\n'+util.inspect(err));
    })
    .on('file', function (field, file) {
      console.log(field, file);
      files.push([field, file]);
    })
    .on('aborted', function (err) {
      console.log("user aborted upload");
    })
    .on('end', function () {
      console.log('-> upload done');
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received fields:\n\n '+util.inspect(fields));
      res.write('\n\n');
      res.end('received files:\n\n '+util.inspect(files));
    });
  form.parse(req);
};