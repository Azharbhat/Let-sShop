const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://azhar:Mongodb%406715@ambcluster.prfsnii.mongodb.net/Let'sShop")
        console.log("Mongo DB Connected: ", conn.connection.host)
    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB