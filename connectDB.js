const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://luciano:Qq1234@cluster0.uhbzf.mongodb.net/games?retryWrites=true&w=majority';

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