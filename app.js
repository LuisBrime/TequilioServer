import express from 'express';
import bodyParser from 'body-parser';
import db from './db';

const app = express();

/*
    Este es para poder recibir jsons en el request, útil para cuando queremos que nos manden 
    el usuario y comprobar que está en la base de datos sin tener que mandar los datos por el URL.
    Para un poco más de info, usé este link de tutorial: 
    https://medium.com/@purposenigeria/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Obtener el nombre de todos los tequileros
app.get('/api/tequileros', (req, res) => {
    var result = [];
    var data = db.tequileros;
    
    for (var i = 0; i < data.length; i++) {
        result.push(data[i].name);
    }

    res.status(200).send({
        success: 'true',
        message: 'tequileros retrieved successfuly',
        tequileros: result
    });
});

// Obtener todas las botellas de un tequilero
app.get('/api/tequileros/:tequilero', (req, res) => {
    var result = [];
    var data = db.tequileros;

    for (var i = 0; i < data.length; i++) {
        if (data[i].name === req.params.tequilero) {
            result = data[i].tequilas;
            console.log(result);
        }
    }

    if (!(result.length > 0)) {
        return res.status(400).send({
            success: 'false',
            message: 'tequilero not found'
        });
    }

    res.status(200).send({
        success: 'true',
        message: 'tequilero tequilas retrieved successfuly',
        tequilas: result
    });
});

// Obtener la información de un tequila dado su SKU
// Si no hay tequilas regresar sólo un arreglo vacío
// Ejemplo: get(api/tequila/:sku)

// Obtener la información de un tequila dado su SKU, un usuario y una contraseña (validar con la db)
// Ejemplo: get(api/tequila/:sku) && el user y pwd se reciben en un json (utilizar bodyParser aquí)

// Obtener el historial de un usuario dado su usuario y contraseña
// Ejemplo: get(api/historial) && el user y pwd se reciben en un json (utilizar bodyParser aquí)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});