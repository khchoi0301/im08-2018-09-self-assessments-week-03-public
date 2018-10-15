var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {
  prop1: 0
};

var server = http.createServer(function (request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');


  // globalCounter.prop1 = 0
  // console.log(request.method, request.url, globalCounter.prop1)


  if (request.method === 'POST' && request.url === '/prop1') {
    // console.log('post', request.method, request.url, globalCounter.prop1)
    globalCounter.prop1++
    // console.log('changed', globalCounter.prop1)
    response.statusCode = 201;
    response.end();
  } else if (request.method === 'GET' && request.url === '/prop1') {
    response.statusCode = 200;
    // console.log('get', request.method, request.url, globalCounter.prop1)
    response.end(JSON.stringify(globalCounter.prop1));
  } else {
    // console.log('wrong', request.method, request.url, globalCounter.prop1)
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
