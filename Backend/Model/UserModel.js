const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const UserSchema= new Schema({
    name:{
        type: String,
        required:true,
    },
    gmail:{
        type: String,
        required:true,
    },
    age:{
        type: Number,
        required:true,
    },
    address:{
        type: String,
        required:true,
    }
});

module.exports=mongoose.model(
    "UserModel",//model name
    UserSchema//fuction name
)