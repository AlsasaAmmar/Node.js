const  express = require('express');
const app = express()
const port = 3000;
const exphbs =require('express-handlebars');

console.log('Sever is running...');

//handle-bars middleware 
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}))

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/weather', (req,res)=> {
    const newCity = req.body.cityName;
    res.send(newCity);
    
})

app.get('/', (req, res) => {
    res.render(`index`)
})

app.listen(port, () => console.log(`listening on port ${port}!`))