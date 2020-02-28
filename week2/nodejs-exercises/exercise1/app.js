const express = require('express');
const app = express();
const port = 3000;
//const content = { "title": "My first blog", "content": "Lorem ipsum" };


const fs = require("fs");
app.use(express.json());

app.post('/blogs', (req, res) => {
    const newBlog = req.body;
    const title = newBlog.title; 
    const content = newBlog.content; 
    // How to get the tile and content from the request??
    fs.writeFileSync(title, content);
    res.end('ok')
    })

// app.post('/blogs', (req, res) => {
//     // How to get the tile and content from the request??
//     const newPost = req.body;

//     res.end('ok')
// })


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
