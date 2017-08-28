'use strict'

//Librerias
const Express = require ('express')//Obtiene las Peticiones Http
const Mongoose = require ('mongoose')//Base de Datos MongoDB

//Constructor
const Pedido = require ('./SchemaPedido')

function ActualizarNombreConID(req,res) {
    let Datoid = req.params.ID;
    let Actualizacion = req.body;

    Pedido.findByIdAndUpdate(Datoid, Actualizacion, (err,datoactualizado) =>{
        if(err) return res.status(500).send({Mensaje: `Error al realizar la peticiones de actualizacion ${err}`})
        if(!datoactualizado) return res.status(404).send({Mensaje: `El producto no existe ${err}`})

    res.status(200).send({Pedido:datoactualizado})
    })
}
function ActualizarCategoriaConNombre(req,res) {
    let DatoNombre = req.params.ID;
    let Actualizacion = req.body.Categoria;

    Pedido.findOneAndUpdate({'Nombre': {$regex: DatoNombre}},{$set:{Categoria:Actualizacion}}, (err,datoactualizado) =>{
        if(err) return res.status(500).send({Mensaje: `Error al realizar la peticiones de actualizacion ${err}`})
        if(!datoactualizado) return res.status(404).send({Mensaje: `El producto no existe ${err}`})

    res.status(200).send({Pedido:datoactualizado})
    })
}
function ActualizarDescripcionConNombre(req,res) {
    let DatoNombre = req.params.ID;
    let Actualizacion = req.body.Descripcion;

    Pedido.findOneAndUpdate({'Nombre': {$regex: DatoNombre}},{$set:{Descripcion:Actualizacion}}, (err,datoactualizado) =>{
        if(err) return res.status(500).send({Mensaje: `Error al realizar la peticiones de actualizacion ${err}`})
        if(!datoactualizado) return res.status(404).send({Mensaje: `El producto no existe ${err}`})

    res.status(200).send({Pedido:datoactualizado})
    })
}
module.exports ={
    ActualizarNombreConID,
    ActualizarCategoriaConNombre,
    ActualizarDescripcionConNombre
}