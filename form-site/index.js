const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { MongoClient } = require("mongodb");


/* De esta forma entra en el primer console.log() pero realmente sigue dando error undefined.
// Connection URI
const uri =
    "mongodb+srv://joanna:<password>@cluster0.lfiji.mongodb.net/archivo?retryWrites=true&w=majority";
// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        // Establish and verify connection
        db = client.db("admin")
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");


    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir); */


/*let db;
MongoClient.connect('mongodb+srv://joanna:<password>@cluster0.lfiji.mongodb.net/archivo?retryWrites=true&w=majority', function(err, client) {

    if (err !== null) {
        console.log(err);
    } else {
        console.log('Dentro')
        db = client.db("formulario");
    }
}); */

//Prueba de rutas con array
let archivo = [];

app.post('/registro-consulta', function(req, res) {
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let email = req.body.email;
    let numero = req.body.telefono;
    let fecha_nacimiento = req.body.fecha_nacimiento;
    let sexo = req.body.radiobutton;
    let consulta = req.body.consulta;
    let mensaje = req.body.mensaje;
    let incidencia = req.body.incidencia;
    let informacion = req.body.informacion;

    let registro = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        numero: numero,
        fecha_nacimiento: fecha_nacimiento,
        sexo: sexo,
        consulta: consulta,
        informacion: informacion,
        incidencia: incidencia,
        mensaje: mensaje,
    }
    archivo.push(registro);
    /* Insertar consulta en la bbdd: 

         db.collection("formulario").find({ nombre: registro.nombre }).toArray(function(err, persona) {
         if (err !== null) {
             res.send(err)
         } else {
             if (persona.length === 0) {
                 res.send({ mensaje: "Esta persona no ha hecho consultas en el formulario" })
             } else {
                 db.collection("formulario").insertOne(registro, function(err, datos) {
                     if (err !== null) {
                         res.send(err);
                     } else {
                         res.send(datos);
                     }
                     console.log('Consulta añadida')
                 });
             }
         }
     })
     */
    res.send(`Se ha añadido una consulta del tipo: ${registro.consulta}`);
});

app.get('/mostrar-registro', function(req, res) {
    let consultasForm = "";

    /* Pedir registro de consultas a bbdd
      db.collection("formulario").toArray(function(err, datos) {
          if (err !== null) {
              res.send(err);
          } else {
              res.send(datos);
          }
      });
      */

    //Prueba de rutas con array 'archivo'
    if (archivo.length) {
        for (let i = 0; i < archivo.length; i++) {
            consultasForm += `
                
                <p>Nombre: ${archivo[i].nombre}</p>
                <p>Apellidos: ${archivo[i].apellidos}</p>
                <p>Número: ${archivo[i].numero}</p>
                <p>Email: ${archivo[i].email}</p>
                <p>Fecha de nacimiento: ${archivo[i].fecha_nacimiento}</p>
                <p>Sexo: ${archivo[i].sexo}</p>
                <p>Consulta: ${archivo[i].consulta}</p>
                <p>Información: ${archivo[i].informacion}</p>
                <p>Incidencia: ${archivo[i].incidencia}</p>
                `
        }
    }

    res.send(consultasForm);
})


app.listen(9000);