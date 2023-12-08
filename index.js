import express from 'express'
import dotenv from 'dotenv'
import  colors from 'colors'
import servicesRoutes from './routes/servicesRoutes.js'
import { db } from './config/db.js'


//variables de entorno 
dotenv.config()

// configurar la app 
const app = express()

//Leer datos via body
app.use(express.json())


// conectar a base de datos

db()

// definir la ruta 

app.use('/api/services', servicesRoutes)

// definir puerto
const PORT = process.env.PORT || 4000
// arrancar la app 
app.listen(PORT, () => {
    console.log (colors.black.bgMagenta('El servidor se esta ejecutando en el puerto:', PORT))
})
