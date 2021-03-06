var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8080;

//Example1 scraping google.com
// var url = "http://google.com";
// request(url, function(err, resp, body){
//   if(err){
//       console.log(err);
//    }else{
//       //console.log(body);
//    }
//   });

//Example2 
//With this simple code, we're able to download google.com and save it into our downloads folder with the name Google.html 
// var destination = fs.createWriteStream('downloads/google.html');
// var url = "http://google.com";
// request(url)
// .pipe(destination)

//Eample3
var destination = fs.createWriteStream('downloads/google.html');
var url = "http://google.com";
request(url)
 .pipe(destination);
//  .on('finish', function(){
//      console.log(done);
//     })
//  .on('error', function(err){
//      console.log(err);
//  });
// or as a alternative way
destination.on('finish', function(){
    console.log('all done');
});

app.listen(port);
console.log("server is listening on" + port);