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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

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

//Obtener datos botella con sku
app.get('/api/tequileros/tequila/:sku', (req, res) => {
    var result = [];
    var data = db.tequileros;
    for(var i = 0; i < data.length; i++){
        
            for(var j = 0; j < data[i].tequilas.length;j++){

                if(data[i].tequilas[j].sku === req.params.sku){
                    result = data[i].tequilas[j];

                    return res.status(200).send({
                        success: 'true',
                        message: 'tequila sku retrieved successfuly',
                        tequila: result
                    });
                }
            }
    }


    // Falta añadir el regresar arreglo vacío
    res.status(400).send({
        success: 'false',
        message: 'not found'
    });
});

// Obtener la información de un tequila dado su SKU, un usuario y una contraseña (validar con la db)
// Ejemplo: get(api/tequila/:sku) && el user y pwd se reciben en un json (utilizar bodyParser aquí)

app.get('/api/tequileros/tequila/:sku/:usr/:pwd', (req, res) => {
    var result = [];
    var usrdata = db.users;
    var data = db.tequileros;
    var loginsku = {
        user: req.body.user,
        pwd: req.body.pwd
    }

    for(var x = 0; x < usrdata.length; x++) {
        if(usrdata[x].user === req.params.usr) {
            if(usrdata[x].pwd === req.params.pwd) {
                for(var i = 0; i < data.length; i++){
        
                    for(var j = 0; j < data[i].tequilas.length;j++){
        
                        if(data[i].tequilas[j].sku === req.params.sku){
                            result = data[i].tequilas[j];
        
                            return res.status(200).send({
                                success: 'true',
                                message: 'tequila sku retrieved successfuly',
                                tequila: result
                            });
                        }
                    }
            }
            }else {
                console.log("Wrong pwd");
            }
        }else {
            console.log("Wrong usr");
        }
    }


    // Falta añadir el regresar arreglo vacío

    res.status(400).send({
        success: 'false',
        message: 'usr or sku not found',
    });
});

// Obtener el historial de un usuario dado su usuario y contraseña
// Ejemplo: get(api/historial) && el user y pwd se reciben en un json (utilizar bodyParser aquí)

app.get('/api/users/historial/:usr/:pwd', (req, res) => {
    var result = [];
    var data = db.users;

    for(var x = 0; x < data.length; x++) {
        if(data[x].user === req.params.usr) {
            if(data[x].pwd === req.params.pwd) {
                result = data[x].historial;
                res.status(200).send({
                    success: 'true',
                    message: 'historial retrieved successfuly',
                    historial: result
                });
            }
        }
    }

    res.status(400).send({
        success: 'false',
        message: 'historial not found',
    });
});


/// asdsaddsa


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});