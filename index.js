const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', exphbs());

app.use(express.static('public'))
app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', { layout: 'index', title: 'Sweat Nashville - Home'});
});

app.get('/social', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('social', { layout: 'index', title: 'Sweat Nashville - Social'});
});

app.listen(process.env.PORT || 3001, 
	() => console.log("Server is running..."));