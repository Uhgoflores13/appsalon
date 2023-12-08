import { services } from '../data/beutyServices.js'
import Services from '../models/Services.js'


const createServices = async (req, res) => {
    if (Object.values(req.body).includes('')){
        const error = new Error ('Todos los campos son obligatorios')
   
   
       return res.status(400).json({
        msg: error.message
    })
    }

    try {
        const service = new Services(req.body)
        const result = await service.save()

        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

const getServices = (req, res) =>{
    res.json(services)
} 

export {
    getServices,
    createServices
}