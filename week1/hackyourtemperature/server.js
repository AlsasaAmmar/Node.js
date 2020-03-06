const  express = require('express');
const app = express()
const port = 3000;
const exphbs =require('express-handlebars');
const axios = require('axios');
const temperature = require("temperature");






console.log('Sever is running...');

//handle-bars middleware 
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}))

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/', (req, res) => {
    res.render(`index`)
})

app.post('/weather', (req,res)=> {
    const newCity = req.body.cityName;
    const APIKEY = require('./sources/keys.json').API_KEY;
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${APIKEY}`)
    .then(info =>{
        let cityTemp = info.data.main.temp;
        let cityTempCels = temperature.kelvinToCelsius(cityTemp).toFixed(1); 
        res.render('index', { weatherText: `The temperature in ${newCity} is ${cityTempCels}°C.` })
    }).catch(error => {
        res.render('index', { weatherText: `Sorry but the city ${newCity} is not found.` })
      })
    
    
})


app.listen(port, () => console.log(`listening on port ${port}!`))