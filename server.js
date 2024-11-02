const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { partials } = require('handlebars');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname,'views/partials'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index');
});


app.get('/contacto', (req, res) => {
  res.render('contacto');
});

app.get('/objetivos', (req, res) => {
  res.render('objetivos');
});

app.get('/Proyectoss', (req, res) => {
  res.render('Proyectoss'); 
});

app.get('/analizador', (req, res) => {
  res.render('analizador');
});

app.get('/pacman', (req, res) => {
  res.render('pacman'); 
});

app.get('/login', (req, res) => {
  res.render('login'); 
});

app.get('/calculadora', (req, res) => {
  res.render('calculadora'); // Asegúrate de que tienes un archivo analisis-lexico.hbs en la carpeta views
});

app.get('/taca', (req, res) => {
    res.render('taca'); // Asegúrate de que tienes un archivo analisis-lexico.hbs en la carpeta views
  });

  app.get('/veterinaria', (req, res) => {
    res.render('veterinaria'); // Asegúrate de que tienes un archivo analisis-lexico.hbs en la carpeta views
  });
  
  app.get('/so', (req, res) => {
    res.render('so'); // Asegúrate de que tienes un archivo analisis-lexico.hbs en la carpeta views
  });
  
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
