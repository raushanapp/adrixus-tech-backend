const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
// console.log("ans",result)
mongoose.set("strictQuery", true);
module.exports = () => {
    return mongoose.connect(process.env.DB_CONNECT,
      
    );
}