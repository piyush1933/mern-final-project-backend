const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express()


const AdminRoute=require("./controller/AdminRoute");
const UserRoute=require("./controller/UserRoute");

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://kondaachi8:test@cluster0.6yitqq3.mongodb.net/language_app");
var db=mongoose.connection;
db.on("open",()=>console.log("connected to db"));
db.on("error",()=>console.log("Error occured while connection db"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/AdminRoute",AdminRoute);
app.use("/UserRoute",UserRoute);

app.listen(4000,()=>{
    console.log("Server Started at 4000");
})