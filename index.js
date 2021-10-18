const express = require('express');
const path = require('path');


const app = express();

app.use( express.static('style'));

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.use('/style', express.static(path.join(__dirname, 'style')));
// app.set('views', path.join(__dirname, '/views'));




app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
}) 

app.get('/sobre', (req,res) => {
    res.sendFile(__dirname + "/views/sobre.html");
})

app.get('/series', (req,res) => {
    res.sendFile(__dirname + "/views/series.html");
})

app.get('/filmes', (req,res) => {
    res.sendFile(__dirname + "/views/filmes.html");
})

app.get('/documentarios', (req,res) => {
    res.sendFile(__dirname + "/views/documentarios.html");
})

app.listen(5000)
console.log('done')