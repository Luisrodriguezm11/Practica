let express = require('express');
let router = express.Router();

const students = require('../controllers/student.controller.js');

// Ruta para crear un nuevo estudiante
router.post('/api/students/create', students.create);

// Aquí podrías agregar otras rutas para manejar más operaciones CRUD en el futuro, por ejemplo:

// router.get('/api/students/:id', students.getStudentById); // Obtener un estudiante por ID
// router.put('/api/students/update/:id', students.updateById); // Actualizar un estudiante por ID
// router.delete('/api/students/delete/:id', students.deleteById); // Eliminar un estudiante por ID

module.exports = router;
