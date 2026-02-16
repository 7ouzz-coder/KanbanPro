const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../../data.json');

// Funciones para manejar el archivo JSON
function leerDatos() {
  try {
    const contenido = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(contenido);
  } catch (error) {
    console.error('Error al leer data.json:', error);
    return null;
  }
}

function escribirDatos(datos) {
  try {
    const datosJSON = JSON.stringify(datos, null, 2);
    fs.writeFileSync(DATA_FILE, datosJSON);
    return true;
  } catch (error) {
    console.error('Error al escribir en data.json:', error);
    return false;
  }
}

// Controladores de páginas

exports.home = (req, res) => {
  res.render('home', {
    layout: 'layouts/layout',
    title: 'Inicio'
  });
};

exports.register = (req, res) => {
  res.render('register', {
    layout: 'layouts/layout',
    title: 'Registro'
  });
};

exports.procesarRegistro = (req, res) => {
  console.log('Intento de registro:', req.body);
  res.redirect('/login');
};

exports.login = (req, res) => {
  res.render('login', {
    layout: 'layouts/layout',
    title: 'Iniciar Sesión'
  });
};

exports.procesarLogin = (req, res) => {
  console.log('Intento de login:', req.body);
  res.redirect('/dashboard');
};

// Controladores del dashboard

exports.dashboard = (req, res) => {
  const datos = leerDatos();
  
  if (!datos) {
    return res.status(500).send('Error al cargar los datos del tablero');
  }
  
  res.render('dashboard', {
    layout: 'layouts/layout',
    title: 'Dashboard',
    proyecto: datos.proyecto,
    tablero: datos.tablero
  });
};

exports.crearTarjeta = (req, res) => {
  try {
    const { titulo, descripcion, etiqueta, listaId } = req.body;
    
    if (!titulo || !descripcion || !etiqueta) {
      return res.status(400).send('Faltan datos obligatorios');
    }

    const datos = leerDatos();
    if (!datos) {
      return res.status(500).send('Error al leer los datos');
    }

    const nuevaTarjeta = {
      id: `tarjeta-${Date.now()}`,
      titulo,
      descripcion,
      etiqueta
    };

    const lista = datos.tablero.listas.find(l => l.id === (listaId || 'lista-1'));
    
    if (!lista) {
      return res.status(404).send('Lista no encontrada');
    }

    lista.tarjetas.push(nuevaTarjeta);

    const guardado = escribirDatos(datos);
    
    if (!guardado) {
      return res.status(500).send('Error al guardar los datos');
    }

    res.redirect('/dashboard');
    
  } catch (error) {
    console.error('Error al crear tarjeta:', error);
    res.status(500).send('Error al procesar la solicitud');
  }
};