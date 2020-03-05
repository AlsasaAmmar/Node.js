const express = require('express');
const fetch = require('node-fetch');
const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books'
const password = 'admin:hvgX8KlVEa';
//const base46 = 'YWRtaW46aHZnWDhLbFZFYQ==';
let buff = new Buffer(password);
let base64 = buff.toString('base64');

let app = express();


fetch(url, { headers: { 'Authorization': `Basic ${base64}` } })
    .then(res => res.json())
    .then(data => console.log(data))
 