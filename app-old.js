const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Cristian',
        edad: 24,
        pais: 'Honduras',
        url: req.url
    }

    // res.write('<h1>Hola Mundo</h1>');
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8000);

console.log('Escuchando el puerto 8000');

