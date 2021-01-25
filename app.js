const express = require('express');
const path = require('path');
const app = express();

// static files
app.use(express.static('./assets/css'));
app.use(express.static('./assets/js'));
app.use(express.static('./assets/img'));

// routes
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/adventure.html'));
});

app.get('/run', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/run.html'));
});

app.get('/stay', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/stay.html'));
});

app.get("/family", (req, res) => {
  res.sendFile(path.join(__dirname, "views/family.html"));
});

app.get("/meets-the-dog", (req, res) => {
  res.sendFile(path.join(__dirname, "views/dog.html"));
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/about.html'));
});


const port = 3300;

app.listen(port, () => {
    console.log(`Duckeys adventure running at http://127.0.0.1:${port}`);
})
