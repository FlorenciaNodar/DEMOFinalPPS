var express = require('express');  
var app = express();

// Serving static files from "public" folder
app.use(express.static('public'));

/**
 * @api {get} /login Inicio de Sesión
 * @apiVersion 0.1.0
 * @apiName GetUser
 * @apiGroup Logueo
 *
 * @apiSuccess {Bool} true/false  True o false dependiendo del resultado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 0,
 *       "response": true
 *     }
 *
 * @apiError Error! Usuario y/o contraseña incorrectas.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Error! Usuario y/o contraseña incorrectas"
 *     }

 * @apiError ADVERTENCIA! Debe completar todos los campos.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ADVERTENCIA! Debe completar todos los campos"
 *     }
 */
app.get('/login/', function(req, res) {  
    // business logic for listing all tasks...
});



/**
 * @api {get} /cerrarSesion Cerrar Sesión
 * @apiVersion 0.1.0
 * @apiName GetUser
 * @apiGroup Deslogueo
 *
 * @apiSuccess {Bool} true/false  True o false dependiendo del resultado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 0,
 *       "response": true
 *     }
 *
 */
app.get('/cerrarSesion/', function(req, res) {  
    // business logic for listing all tasks...
});


app.listen(3000, function() {  
    console.log('Abra el localhost3000/apidoc...');
});