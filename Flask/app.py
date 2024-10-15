from flask import Flask, jsonify, request
from flask_cors import CORS
from config import Config
import mysql.connector 
from mysql.connector import Error

app = Flask(__name__)

# Inicializar MySQL
def get_db_connection():
    
    connection = None
    try:
        connection = mysql.connector.connect(
            host=Config.MYSQL_HOST,       # Cambia esto si tu servidor MySQL no está en localhost
            user=Config.MYSQL_USER,      # Tu usuario de MySQL
            password=Config.MYSQL_PASSWORD,  # Tu contraseña de MySQL
            database=Config.MYSQL_DB  # El nombre de tu base de datos
        )
        if connection.is_connected():
            print("Conexión exitosa a la base de datos MySQL")
    except Error as e:
        print(f"Error al conectar a MySQL: {e}")
        connection = None

    return connection

# Habilitar CORS
CORS(app)
# Ruta de ejemplo para obtener datos
@app.route('/usuarios', methods=['GET'])
def get_usuarios():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM usuario')
    rows = cur.fetchall()
    cur.close()
    return jsonify(rows)
    # Convertir a lista de diccionarios
    
# Ruta para crear un nuevo usuario
@app.route('/usuarios', methods=['POST'])
def add_usuario():
    if request.method == 'POST':
        email = request.json['email']
        password = request.json['password']
        activo=request.json['activo']

        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("INSERT INTO usuario (email,password,activo) VALUES (%s, %s, %s)", (email,password,activo))
        conn.commit()
        cur.close()
        
        return jsonify({'mensaje': 'Usuario añadido exitosamente'})
    
# Ruta para consultar un usuario
@app.route('/usuarioId', methods=['POST'])
def getUsuario():
    conn = get_db_connection()
    cur = conn.cursor()
    data=request.json
    cur.execute('SELECT * FROM usuario where email=%s',(data["email"],))
    rows = cur.fetchall()
    cur.close()
    return jsonify(rows)

if __name__ == '__main__':
    app.run(debug=True)