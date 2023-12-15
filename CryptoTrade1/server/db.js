const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
    };

    try{
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to database successfully");
    }catch(error){
        console.log(error);
        console.log("Error! Could not connect to database successfully")    ;
    }
}