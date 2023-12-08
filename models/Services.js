import mongoose from 'mongoose'


const servicesSchema = mongoose.Schema({
    name:{
        type: 'string', 
        required: true,
        trim: true,
    },
    price:{
        type: 'number',
        required: true,
        trim: true,
    }
})

const Services = mongoose.model('Services', servicesSchema)
export default Services