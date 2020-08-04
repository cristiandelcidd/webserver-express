var hbs = require('hbs');

const express = require('express');
const app = express();

var hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    // let salida = {
    //     nombre: 'Cristian',
    //     edad: 24,
    //     pais: 'Honduras',
    //     url: req.url
    // };

    // res.send(salida);

    res.render('home', { // Esta peticion se hace gracias a los handlebars, para convertir o mostar el archivo home.hbs como un archivo html normal
        nombre: 'cristian delcid',
        // Pasamos nombre como variable dentro de nuestro archivo .hbs
    });

});

app.get('/about', (req, res) => {
    res.render('about');
}) 

// app.get('/data', (req, res) => {

//     res.send('Hola Mundo desde Node');
// });

app.listen(port, () => {
    console.log(`Escuchando la aplicación en el puerto ${port}`)
});



// nodemon server -e js,hbs,html,css
// Este comando sirve para que nuestro servidor también esté pendiente a cambios en archivos con diferentes extensiones