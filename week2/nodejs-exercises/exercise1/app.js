const express = require('express');
const app = express();
const port = 3000;


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

    app.put('/blogs/:blog_name', (req, res) => {
        // How to get the tile and content from the request??
        const findBlog = req.params.blog_name; 
        const newTitle = req.body.title; 
        const newContent = req.body.content; 
    
        if (fs.existsSync(findBlog)) {
          fs.writeFileSync(newTitle, newContent);
          res.end('ok')
        }
        else {
          res.end('post does not exist');
        }
    })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
