require('dotenv').config()
const { error } = require('console')
const express = require('express')
const mongoose = requiere('mongoose')
const session = requiere('express-session')

const app = express()
const PORT = process.env.PORT || 4000


mongoose.connect(process.env.DB_URI)

const db = mongoose.connection
db.on('error', (error) => console.log(error) )
db.once('open', () => console.log('Connected DB '))
