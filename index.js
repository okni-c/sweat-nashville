const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs());

app.use(express.static('public'))

// Get requests
app.get('/', (req, res) => {
    res.render('main', { layout: 'index', title: 'Sweat Nashville - Home'});
});

app.get('/social', (req, res) => {
    res.render('social', { layout: 'index', title: 'Sweat Nashville - Social'});
});

app.listen(process.env.PORT || 3001, 
	() => console.log("Server is running..."));