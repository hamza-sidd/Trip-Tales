const MONGO_URL="mongodb://127.0.0.1:27017/TripTales";

main().then(()=>{
    console.log("connected to DB");
}).catch((e)=>{
     console.log(e);
})
   
async function main(){
    await mongoose.connect(MONGO_URL);
}