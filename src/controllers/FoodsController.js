const foodModel = require("../models/foodModel");

exports.CreateFoodItem = async (req, res) => {
    try{
        let reqBody = req.body;
        await foodModel.create(reqBody);
        res.json({status:"success",message:"Create Completed"})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

exports.GetAllFoodItems =async (req, res) => {
    try{
        let data=await foodModel.find({});
        res.json({status:"success",data:data})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

exports.GetSingleFood = async (req, res) => {
    try{
        let id = req.params.id
        let data = await foodModel.find({_id:id});
        res.json({status:"success",data:data});
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

exports.UpdateFoodItem =async (req, res) => {
    try{
        let {id}=req.params;
        let reqBody=req.body;
        await foodModel.updateOne({_id:id}, reqBody);
        res.json({status:"success", message:"Update Completed"})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}
