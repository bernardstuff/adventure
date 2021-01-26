const express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');
const app = express();

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// static files
app.use(express.static('./assets/css'));
app.use(express.static('./assets/js'));
app.use(express.static('./assets/img'));

// routes
app.get('/', (req,res) => {
    res.render('adventure');
});

app.get('/run', (req,res) => {
    res.render('run');
});

app.get('/stay', (req,res) => {
    res.render('stay');
});

app.get("/family", (req, res) => {
  res.render('family');
});

app.get("/meets-the-dog", (req, res) => {
  res.render('dog');
});

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/secret-to-this-life', (req,res) => {
    res.redirect('https://www.codecademy.com/learn')
});


const port = 3300;
var iface='wlp2s0'
var localip = require('local-ip')(iface);
app.listen(port, () => {
    console.log(`Duckeys adventure running at http://${localip}:${port}`);
})
