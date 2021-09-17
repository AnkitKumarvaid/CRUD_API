const ProductModal=require("../../../modal/Product");
const { 
    validationResult 
} = require("express-validator");
 
module.exports.createProduct=async(req,res)=>{
 try{
    const errors=validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array() 
        });
    }
     
    const data =await ProductModal.create(req.body);
    res.status(200).json({
        msg:"Product create Success", 
        data: data
    });
 }catch (error){
     console.log("Error in creating Product", error);
     res.status(500).json({
         msg:"Internal Server Error"
        });
    }
};

module.exports.getProduct =async(req,res) => {
    try{
       const data =await ProductModal.find({});
       res.status(200).json({
           msg:"Products", 
           data: data
        });
    }catch (error){
        console.log("Error in getting product", error);
        res.status(500).json({
            msg:"Internal Server Error"
        });
    }
   }

   module.exports.deleteProduct =async(req,res) => {
    try{
       const data =await ProductModal.deleteOne({});
       res.status(200).json({
           msg:"Products", 
           data: data
        });
    }catch (error){
        console.log("Error in getting product", error);
        res.status(500).json({
            msg:"Internal Server Error"
        });
    }
   };


   module.exports.updateProduct = async (req, res) => {
    try {
        const data = await ProductModal.findByIdAndUpdate(
            req.params["id"],
            req.body, {
                new: true
            }
        );

        if (!data) {
            res
                .status(400)
                .json({
                    msg: "NOT FOUND",
                    data: "Item with id not found."
                });
        } else {
            res.status(200).json({
                msg: "UPDATE SUCCESS",
                data: data
            });
        }
    } catch (error) {
        console.error("Error in updating product", error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
};