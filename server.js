'use strict'
//Librerias
const Mongoose = require ('mongoose')//Base de Datos MongoDB
//Configuraciones
const CONFIGURACION = require ('./configuracion')//Toma mis configuraciones

//Aplicacion
const App = require('./Datos/Enlaces')//Modulo enlaces

//Conexion a la base de datos
Mongoose.connect(CONFIGURACION.BASEDEDATOS, (err,res) =>{
    if(err){
        return console.log(`Error al Conectar a la Base de Datos, ${err}`)
    }else{
        console.log(`Conexion a la Base de Datos ${CONFIGURACION.BASEDEDATOS}, Establecida!`)
        App.listen(CONFIGURACION.PORT, () =>{
            useMongoClient:true,
            console.log(`Servidor Corriendo en el Puerto: ${CONFIGURACION.PORT}!`)
        })
    }
})