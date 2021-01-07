const mongoose = require('mongoose');

const dev_db_url = 'mongodb+srv://luciano:Qq1234@cluster0.uhbzf.mongodb.net/games?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url; 

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