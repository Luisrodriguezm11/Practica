const Student = require('../models/estudiante.model'); // Asegúrate de ajustar la ruta según tu estructura de proyecto

// Crear un nuevo estudiante
exports.create = (req, res) => {
    let student = {};

    try {
        student.nombre = req.body.nombre;
        student.apellido = req.body.apellido;
        student.carnet = req.body.carnet;

        Student.create(student).then(result => {
            res.status(200).json({
                message: "Estudiante creado exitosamente con id = " + result.id,
                student: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
}
