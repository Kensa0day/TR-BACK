import mongoose from 'mongoose';

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log('Mongo Connect')

    } catch (err) {
        console.log('Connect Failed')

    }
}

module.exports = connectDB
