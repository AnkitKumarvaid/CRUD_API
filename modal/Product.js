const mongoose = require("mongoose");

const productSchema = new mongoose.schema(
 {
     name:{
         type:String,
         required:true,
     },
     price: {
         type: Number,
         required: true,
     },
     description: {
         type:String,
     },
     quantity:{
         type:Number,
         default:1,
     },
    },
    {timestamps}
);


 const Product = mongoose.model("Product", productSchema);
module.exports = Product;


