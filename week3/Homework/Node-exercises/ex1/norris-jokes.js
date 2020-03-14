const fetch = require('node-fetch');

const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books'


fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.value.joke))
 
