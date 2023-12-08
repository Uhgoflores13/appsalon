import mongoose from 'mongoose'
import colors from 'colors'
mongoose.set('strictQuery', true);

export const db = async () => {
    try{
        const db = await mongoose.connect(process.env.MONGO_URI);
        const url = `${db.connection.host}:${db.connection.port}`
        console.log((colors.cyan.bgMagenta`Se connecto correctamente: ${url}`))        
    }catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}