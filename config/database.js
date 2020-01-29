const {connect} = require('mongoose');

const connectDB = async () => {
    try {
        await connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-fkeeh.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true});
        console.log('Base de datos conectada.');
    } catch(err) {
        console.error('Error en la base de datos', err);
    }
}

module.exports = connectDB;