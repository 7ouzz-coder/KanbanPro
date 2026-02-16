// Importar módulos necesarios
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const router = require('./src/routes/router');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'img/views'));
hbs.registerPartials(path.join(__dirname, 'img/views/partials'));

// Usar las rutas
app.use('/', router);

// Manejo de páginas no encontradas
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Página no encontrada</h1>
    <p>La página que buscas no existe.</p>
    <a href="/">Volver al inicio</a>
  `);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('KanbanPro - Sprint 1');
  console.log('='.repeat(50));
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log('');
  console.log('Rutas disponibles:');
  console.log(`  - Inicio:      http://localhost:${PORT}/`);
  console.log(`  - Registro:    http://localhost:${PORT}/register`);
  console.log(`  - Login:       http://localhost:${PORT}/login`);
  console.log(`  - Dashboard:   http://localhost:${PORT}/dashboard`);
  console.log('');
  console.log('Presiona Ctrl+C para detener el servidor');
  console.log('='.repeat(50));
});