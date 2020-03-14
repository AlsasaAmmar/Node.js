const fetch = require('node-fetch');
const express = require('express');
const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books'

let app = express();


fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.value.joke))
 
