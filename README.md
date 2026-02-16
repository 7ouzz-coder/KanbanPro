# 💼 EF-M6 — Proyecto Integrador Sprint 1  
## KanbanPro — Prototipo Funcional

## 📌 Descripción General

**KanbanPro** es una aplicación web tipo Kanban cuyo objetivo es facilitar la gestión de tareas mediante tableros, listas y tarjetas.  

Este proyecto corresponde al **Sprint 1**, enfocado en la creación de un **prototipo funcional renderizado desde servidor**, validando:

- Diseño visual
- Navegación
- Persistencia básica de datos usando archivos JSON

Para esta primera etapa se utiliza un **archivo JSON local** como base de datos, permitiendo implementar un flujo completo de lectura, modificación y escritura de datos.

---

## 📧 Kick-off del Proyecto

**De:** David — Product Manager de KanbanPro  
**Para:** Equipo de Desarrollo  

> ¡Hola equipo!  
>  
> Estoy muy emocionado de dar inicio al desarrollo de KanbanPro. Para arrancar con fuerza, necesitamos construir un prototipo funcional que nos permita validar tanto el diseño visual como la experiencia de usuario principal.  
>  
> El objetivo de este primer sprint es crear una aplicación navegable que no solo luzca como el producto final, sino que también demuestre la funcionalidad clave: la capacidad de añadir una tarea y que esta persista.  
>  
> Para esta fase inicial, utilizaremos un archivo JSON local en el servidor como nuestra "base de datos". Esto nos dará una prueba de concepto sólida sobre la cual construir.  
>  
> ¡Vamos a crear la primera versión funcional de KanbanPro!  
>  
> Saludos,  
> **David**

---

## 🎯 Objetivo del Sprint 1

Construir una **aplicación web inicial renderizada desde el servidor**, incluyendo:

- Interfaz de usuario
- Navegación básica
- Persistencia de datos local usando el sistema de archivos de **Node.js**

---

## 🧩 Historias de Usuario

### HU-01 — Navegación y Estructura Visual

**Como** visitante,  
**Quiero** navegar por las páginas Inicio, Registro e Inicio de Sesión,  
**Para** comprender la estructura del sitio.

#### ✅ Criterios de Aceptación

- Existe la ruta `GET /` que renderiza `home.hbs`.
- Existen las rutas:
  - `GET /register`
  - `GET /login`
- Todas las vistas heredan de un layout principal `layout.hbs`.

---

### HU-02 — Visualización de Datos Persistentes en el Dashboard

**Como** usuario (simulado),  
**Quiero** que el dashboard muestre datos persistentes,  
**Para** que la información se mantenga al recargar la página.

#### ✅ Criterios de Aceptación

- Existe un archivo `data.json` con la estructura inicial.
- La ruta `GET /dashboard`:
  - Lee el archivo usando `fs.readFileSync`.
  - Parsea el contenido usando `JSON.parse`.
  - Envía los datos a la vista `dashboard.hbs`.
- La vista utiliza `{{#each}}` para renderizar dinámicamente tableros, listas y tarjetas.

---

### HU-03 — Creación y Persistencia de Nuevas Tareas

**Como** usuario (simulado),  
**Quiero** agregar nuevas tareas mediante un formulario,  
**Para** que estas queden guardadas.

#### ✅ Criterios de Aceptación

- `dashboard.hbs` incluye un formulario HTML:

  ```html
  <form method="POST">