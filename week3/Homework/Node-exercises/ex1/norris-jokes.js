const fetch = require('node-fetch');
const express = require('express');
const url = 'http://api.icndb.com/jokes/random'

let app = express();


fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.value.joke))
 
