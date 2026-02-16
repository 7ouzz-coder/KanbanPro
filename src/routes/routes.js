const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Rutas de páginas
router.get('/', controller.home);
router.get('/register', controller.register);
router.post('/register', controller.procesarRegistro);
router.get('/login', controller.login);
router.post('/login', controller.procesarLogin);

// Rutas del dashboard
router.get('/dashboard', controller.dashboard);
router.post('/nueva-tarjeta', controller.crearTarjeta);

module.exports = router;