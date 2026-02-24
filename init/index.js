const mongoose=require("mongoose");
const Listing=require("../models/listing.js");
const initData=require("./data.js");

const MONGO_URL="mongodb://127.0.0.1:27017/TripTales";

main().then(()=>{
    console.log("connected to DB");
}).catch((e)=>{
     console.log(e);
})
   
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj, owner:"6994af5ea722cc0dbc1dc56e"}));
    await Listing.insertMany(initData.data);
    console.log("initialised");
}

initDB();