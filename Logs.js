import mongoose from 'mongoose'

const { Schema } = mongoose

const logSchema = new Schema({
    date: Date,
    notes: String,
    time: String,
    location: {
        
    },
    photos: Array
})


export default mongoose.model('Log', logSchema)

