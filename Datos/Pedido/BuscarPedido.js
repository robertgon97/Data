'use strict'

//Librerias
const Express = require ('express')//Obtiene las Peticiones Http
const Mongoose = require ('mongoose')//Base de Datos MongoDB

//Constructor
const Pedido = require ('./SchemaPedido')

function Todos(req,res) {
    console.log('Buscando a todos...');
    Pedido.find({}, (err,resultado) => {
        if (err) {
            console.log(`Error 500 en la Base de Datos: ${err}`)
            return res.status(500).send({Mensaje: "Error en el Servidor"})
        }else if (!resultado) {
            console.log(`Error 400, No existe ningun dato en la Base de Datos`)
            return res.status(400).send({Mensaje: "No hay Datos en el Servidor"})
        }else{
            console.log(`Resultado:`)
            return res.status(200).send({resultado})
            console.log(resultado)
        }
    })
}
function Categoria(req,res){
    console.log (`Buscando Categoria Especificada...`)
    let buscar = req.params.ID;
    Pedido.find({Categoria : {$regex: buscar}}, (err,resultado) => {
        if (err) {
            console.log(`Error 500 en la Base de Datos: ${err}`)
            return res.status(500).send({Mensaje: "Error en el Servidor"})
        } else  if (!resultado) {
            console.log(`Error 400, No existe ningun dato en la Base de Datos`)
            return res.status(400).send({Mensaje: "No hay Datos en el Servidor"})
        } else {
            console.log(`Resultado:`)
            return res.status(200).send({resultado})
            console.log(resultado)
        }
    })
}
function Nombre(req,res) {
    console.log (`Buscando el Nombre Especificado...`)
    let buscar = req.params.ID;
    Pedido.find({Nombre : {$regex: buscar}}, (err,resultado) => {
        if (err) {
            console.log(`Error 500 en la Base de Datos: ${err}`)
            return res.status(500).send({Mensaje: "Error en el Servidor"})
        } else  if (!resultado) {
            console.log(`Error 400, No existe ningun dato en la Base de Datos`)
            return res.status(400).send({Mensaje: "No hay Datos en el Servidor"})
        } else {
            console.log(`Resultado:`)
            return res.status(200).send({resultado})
            console.log(resultado)
        }
    })
}
function Descripcion(req,res) {
    console.log (`Buscando el Dato Especificado en Descripcion...`)
    let buscar = req.params.ID;
    Pedido.find({Descripcion : {$regex: buscar}}, (err,resultado) => {
        if (err) {
            console.log(`Error 500 en la Base de Datos: ${err}`)
            return res.status(500).send({Mensaje: "Error en el Servidor"})
        } else  if (!resultado) {
            console.log(`Error 400, No existe ningun dato en la Base de Datos`)
            return res.status(400).send({Mensaje: "No hay Datos en el Servidor"})
        } else {
            console.log(`Resultado:`)
            return res.status(200).send({resultado})
            console.log(resultado)
        }
    })
}
module.exports ={
    Todos,
    Categoria,
    Nombre,
    Descripcion
}