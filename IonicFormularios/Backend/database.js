const mysql=require("mysql2");

connection= mysql.createConnection({
        host: 'localhost',    // Cambia esto según tu entorno
        user: 'root',         // Tu usuario de MySQL
        password: '', // Tu contraseña de MySQL
        database: 'escuela' // Nombre de la base de datos
});

// Conectar a MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conexión exitosa a MySQL');
});

module.exports = connection;