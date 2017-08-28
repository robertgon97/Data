'use strict'

//Librerias
const Mongoose = require ('mongoose')//Base de Datos MongoDB
const Schema = Mongoose.Schema //Plantilla de datos en la base de datos

//Coleccion Restaurantes
const Pedido = Schema({
    Nombre: String,
    Descripcion: String,
    Categoria: String
})
module.exports = Mongoose.model('Pedido', Pedido)