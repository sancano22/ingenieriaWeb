from flask import Flask,request, jsonify,render_template
from flaskext.mysql import MySQL
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)

#configuracion
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'fisiologicas'
mysql = MySQL(app)
mysql.init_app(app)

CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/galvanico',methods=['GET','POST'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def galvanico():
    conn = mysql.connect()
    cursor =conn.cursor()
    if request.method == 'GET':
        cursor.execute('''SELECT * from galvanico''')
        data = cursor.fetchall()
    else:
        idpaciente=json.loads(request.data)
   
        cursor.execute('''SELECT * from galvanico where IDpaciente=%s''',(idpaciente["idpaciente"]))
        data = cursor.fetchall()
    
    return jsonify({"results":data})
   

@app.route('/pulsimetro',methods=['GET','POST'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def pulsimetro():
    conn = mysql.connect()
    cursor =conn.cursor()
    if request.method == 'GET':
        cursor.execute('''SELECT * from pulsimetro''')
        data = cursor.fetchall()
    else:
        idpaciente=json.loads(request.data)
   
        cursor.execute('''SELECT * from pulsimetro where IDpaciente=%s''',(idpaciente["idpaciente"]))
        data = cursor.fetchall()
    
    return jsonify({"results":data})

@app.route('/pacientes',methods=['GET'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def pacientes():
    conn = mysql.connect()
    cursor =conn.cursor()
    cursor.execute('''SELECT * from pacientes''')
    data = cursor.fetchall()
    return jsonify({"results":data})



if __name__ == "__main__":
    app.run(debug=True)