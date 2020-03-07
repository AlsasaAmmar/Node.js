const express = require('express');
const fetch = require('node-fetch');
const PORT = 5000;
const url = 'https://reservation100-sandbox.mxapps.io/rest-doc/api/swagger.json'

const data = {
    "name" : "Ammar",
    "numberOfPeople": 2
}

const headers = { 'Content-Type' : 'application\json'}

let app = express();

app.get('/', (req,res) => {
    fetch(url, { method: 'POST', headers: headers, body:  JSON.stringify(data)})
    .then(res =>  console.log(res))
    .catch(err => {
        console.log(err)
      })
  })

  app.listen(PORT, () => {
    console.log(`running in port ${PORT}`)
  }) 

