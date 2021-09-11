const ProductModal=require("../../../modal/Product");

 
module.exports.createProduct=async(req,res)=>{
 try{
    const data =await ProductModal.create(req.body);
    res.status(200).json({msg:"Product create Success", data: data})
 }catch (error){
     console.log("Error in creating Product", error);
     res.status(500).json({msg:"Internal Server Error"});
 }
};

module.exports.createProduct=async(req,res)=>{
    try{
       const data =await ProductModal.create(req.body);
       res.status(200).json({msg:"Product create Success", data: data})
    }catch (error){
        console.log("Error in creating Product", error);
        res.status(500).json({msg:"Internal Server Error"});
    }
   };