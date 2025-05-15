const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

const restaurantSchema = new mongoose.Schema({
    name:{type:String,required:true},
    city:{type:String,required:true},
    items:[{type:mongoose.Schema.Types.ObjectId,ref:"items"}]
})

const itemSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true}
})

const items = new mongoose.model("items",itemSchema)
const restaurant = new mongoose.model("restaurant",restaurantSchema)

app.listen(3000,()=>{
    console.log("server is running in port 3000")
})