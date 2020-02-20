const  express = require('express');
const app = express()
const port = 3000
console.log('Sever is running...');


app.get('/', (req, res) => res.send(`hello from backend to frontend!`))

app.listen(port, () => console.log(`listening on port ${port}!`))