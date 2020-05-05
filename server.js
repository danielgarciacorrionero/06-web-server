const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Daniel',
        apellidos: 'García Corrionero'
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Daniel',
        apellidos: 'García Corrionero'
    });

});

app.get('/json', (req, res) => {

    let salida = {
        nombre: 'Daniel',
        edad: 30,
        url: req.url
    };
    res.send(salida);
    //res.send('Hola Mundo');
});

app.get('/mundo', (req, res) => {

    res.send('Hola Mundo');
});

app.listen(port, () => {
    console.log(`Eschando peticiones en puerto ${port}`);
});