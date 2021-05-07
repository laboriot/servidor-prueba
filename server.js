const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hola Mundo con Express!'))

app.listen(3000);
console.log('server funcionando')