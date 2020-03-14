const express =require ('express');
const fetch = require('node-fetch');
const exphbs = require('express-handlebars');


const app = express();

//redirect .img 
//json.image
app.engine('handlebars', exphbs()); 
app.set('view engine', 'handlebars');
app.set('views' + __dirname +'/views');



app.get('/:id', (req, res)=>{
    fetch( "https://randomfox.ca/floof/")
    .then(response => response.json())
    .then(json => {
        const id = req.params.id;
        console.log(id);
        if (id === '1'){
            console.log('hello')
            res.render('index', {layout: false, image: json.image, ID: id})
        } else if (id ==='2'){
        res.render('index1', {layout: false, image: json.image, ID: id})
    }
    })
    .catch(err => {
        console.error(err);
        res.status = 500;
        res.end('oopsie');
    })
})


app.listen(5000);
