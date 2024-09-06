import express from 'express'
import createUser from './routes.js'
import User from './models/User.js'
import Sequelize from 'sequelize'
import config from './config/database.js'
import userRoutes from './routes.js'

const app = express()
app.use(express.json())

const sequelize = new Sequelize(config)
User.init(sequelize)

app.use('/usuarios', createUser)

sequelize.authenticate()
    .then(() => {
        console.log("Banco de dados contectado")
        app.listen(3000, () => {
            console.log("Server online")
        })
    })
    .catch(err => {
        console.error(err)
    })


