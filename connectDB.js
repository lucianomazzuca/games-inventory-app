const mongoose = require('mongoose');

const mongoDB = process.env.DB_URL;

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })

        console.log(`Database connected: ${conn.connection.host}`)
        
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;