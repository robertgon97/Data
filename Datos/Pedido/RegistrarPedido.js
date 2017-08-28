'use strict'

//Librerias
const Express = require ('express')//Obtiene las Peticiones Http
const Mongoose = require ('mongoose')//Base de Datos MongoDB

//Constructor
const Pedido = require ('./SchemaPedido')

function Registrar(req,res) {
    console.log('Registrando...');
    let pedido = new Pedido;
    pedido.Nombre = req.body.Nombre;
    pedido.Categoria = req.body.Categoria;
    pedido.Descripcion = req.body.Descripcion;
    console.log(req.body.Nombre + req.body.Categoria + req.body.Descripcion)
    if (pedido.Nombre!=null && pedido.Categoria!=null && pedido.Descripcion!=null) {
        pedido.save((err, pedido) => {
            if (err) {
                console.log(`Error 500 del Servidor : ${err}`)
                return res.status(500).send({Mensaje : `Error 500 al Guardar en la Base de Datos`})
            }
        })
        res.status(200).send(pedido)
        console.log(pedido)
        console.log(`Dato Guardado Exitosamente!`)
    }else{
        console.log(`Error 400 del usuario : No inserto todos los datos`)
        return res.status(400).send({Mensaje : `No Ingresastes Todos los datos`})
    }
}
module.exports ={
    Registrar
}