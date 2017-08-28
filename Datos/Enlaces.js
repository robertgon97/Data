'use strict'

//Librerias
const Express = require ('express')//Obtiene las Peticiones Http
const HBS = require ('express-handlebars')//Parte Grafica de la Aplicacion
const Mongoose = require ('mongoose')//Base de Datos MongoDB
const BodyParser = require ('body-parser')//Toma el contenido http con res.body
const MethodOverride = require ('method-override')//Permite usar verbos HTTP como PUT o DELETE en lugares donde el cliente no lo admite
const CONFIGURACION = require ('../configuracion')//Toma mis configuraciones

//Middlewares
const App = Express()
App.use(BodyParser.urlencoded({extended:false}))//Activa JSON
App.use(BodyParser.json())//Configura el Json
App.use(MethodOverride())
App.engine('.hbs', HBS ({//Configura el Motor de plantillas
    defaultLayout: 'default',
    extname: '.hbs'
}))
App.set('view engine', 'hbs')

//Modulos
const Pedido_Busq = require('./Pedido/BuscarPedido');
const Pedido_Regis = require('./Pedido/RegistrarPedido');
const Pedido_Elim = require('./Pedido/EliminarPedido');
const Pedido_Actu = require('./Pedido/ActualizarPedido');

//Direcciones
App.get('/api/Datos',Pedido_Busq.Todos)//Todos los Datos
App.get('/api/Datos/Categoria/:ID',Pedido_Busq.Categoria)//Buscar Por Categoria
App.get('/api/Datos/Nombre/:ID',Pedido_Busq.Nombre)//Buscar por nombre
App.get('/api/Datos/Descripcion/:ID', Pedido_Busq.Descripcion)//Busca por alguna descripcion

App.post('/api/Datos', Pedido_Regis.Registrar)//Registra el pedido

App.put('/api/Datos/Nombre/:ID', Pedido_Actu.ActualizarNombreConID)//Actualiza Nombre buscando por ID
App.put('/api/Datos/Nombre/:ID/Categoria', Pedido_Actu.ActualizarCategoriaConNombre)//Actualiza la categoria buscando por Nombre
App.put('/api/Datos/Nombre/:ID/Descripcion', Pedido_Actu.ActualizarDescripcionConNombre)//Actualiza Descripcion buscando por Nombre

App.delete('/api/Datos/Nombre/:ID', Pedido_Elim.EliminarPorNombre)//Elimina el Pedido
App.delete('/api/Datos/ID/:ID', Pedido_Elim.EliminarPorID)//Elimina el Pedido

//Direcciones graficas
App.use('/Casa',(req,res) => {
    res.render('Casa')
})
App.use('/Registrar',(req,res) => {
    res.render('Registro')
})
App.use('/Buscar',(req,res) => {
    res.render('Buscador')
})
App.use('/Eliminar',(req,res) => {
    res.render('Eliminar')
})
App.use('/Actualizar',(req,res) => {
    res.render('Actualizar')
})

module.exports = App