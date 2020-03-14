
const fetch = require('node-fetch');
const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books'
const password = 'admin:hvgX8KlVEa';
//const base46 = 'YWRtaW46aHZnWDhLbFZFYQ==';
let buff = Buffer.from(password);
let base64 = buff.toString('base64');


fetch(url, { headers: { 'Authorization': `Basic ${base64}` } })
    .then(res => res.json())
    .then(data => console.log(data))
 