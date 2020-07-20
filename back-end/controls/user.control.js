;
'use strict'
const connectDB = require('../config/db')
const jwt = require('jsonwebtoken')

let getUsers = async (req, res) => {
    let db = await connectDB()
    db.collection('users').find().toArray()
        .then(data => {
            res.status(200).json({
                ok: true,
                data,
                sms: data.length
            })
        }).catch(err => {
        res.status(500).json({
            ok: false,
            data: null,
            sms: err
        })
    })
}

let postUser = async (req, res) => {
    let user = req.body
    if (user.names && user.lastNames && user.email && user.password) {
        let db = await connectDB()
        db.collection('users').insertOne(user)
            .then(() => {
                res.status(200).json({
                    ok: true,
                    user,
                    sms: 'Almacenado'
                })
            }).catch(err => {
            res.status(500).json({
                ok: false,
                data: null,
                sms: `Error al almacenar los datos: ${err}`
            })
        })
    }
}

let deleteOne = async (req, res) => {
    let id = req.params.id
    console.log(id)
    let db = await connectDB()
    db.collection('users').deleteOne({_id: id})
        .then(() => {
            res.status(200).json({
                ok: true,
                data: null,
                sms: 'Eliminado'
            })
        }).catch(err => {
        res.status(500).json({
            ok: false,
            data: null,
            sms: `Error al eliminar los datos: ${err}`
        })
    })
}

let loginUser = async (req, res) => {
    let user = req.body
    let db = await connectDB()
    let findUser = await db.collection('users').findOne({email: user.email})
    if (user.email === findUser.email) {
        if (user.password === findUser.password) {
            let token = jwt.sign(user, process.env.KEY_JWT, {
                algorithm: 'HS256',
                expiresIn: parseInt(process.env.TIME)
            })
            res.status(200).json({
                ok: true,
                user, token
            })
        } else {
            res.status(200).send('Contraseña o correo incorrecto')
        }
    } else {
        res.status(200).send('La cuenta no existe')
    }
}

module.exports = {
    loginUser,
    getUsers,
    postUser,
    deleteOne
}
