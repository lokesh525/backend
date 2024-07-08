
const mongoose = require("mongoose")
async function connectToDb(){
   await mongoose.connect("mongodb+srv://lokesh98643293:JE39AfTLeyXe6u3O@cluster0.kff6mkj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   console.log("Datatbase connected")
}
module.exports = connectToDb