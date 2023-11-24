const mongoose=require("mongoose");
const AmdinSchema=new mongoose.Schema({
    "name":{type:String},
    "image":{type:Array},
    "content":{type:String},
    "quiz": { type: Array}
},{
    collection:"admin"
})

module.exports=mongoose.model("AmdinSchema",AmdinSchema);
