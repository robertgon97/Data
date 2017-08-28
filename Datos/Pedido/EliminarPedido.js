'use strict'

//Librerias
const Express = require ('express')//Obtiene las Peticiones Http
const Mongoose = require ('mongoose')//Base de Datos MongoDB

//Constructor
const Pedido = require ('./SchemaPedido')

function EliminarPorNombre (req,res){
    let nombre = req.params.ID
    Pedido.findOne({Nombre : {$regex: nombre}}, (err,resultado) =>{
        if(err) return res.status(500).send({Mensaje: `Error No existe el dato ${err}`})

        resultado.remove({Nombre:resultado}, err => {
            if(err) return res.status(500).send({Mensaje: `Error al eliminar la informacion ${err}`})
            res.status(200).send({Mensaje: `El Dato fue eliminado`})
        })
    })
}
function EliminarPorID (req,res){
    let IDproducto = req.params.ID
    Pedido.findById(IDproducto, (err,resultado) =>{
        if(err) return res.status(500).send({Mensaje: `El dato no existe ${err}`})

        resultado.remove({_id:resultado},err => {
            if(err) return res.status(500).send({Mensaje: `Error al eliminar la informacion ${err}`})
            res.status(200).send({Mensaje: `El Datos fue eliminado`})
        })
    })
}
module.exports ={
    EliminarPorNombre,
    EliminarPorID
}