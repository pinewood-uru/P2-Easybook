let mongoose=require("mongoose");
mongoose.connect("");
let db=mongoose.connection;
db.once("open", ()=>{
 console.log("la conexión a la base fue exitosa" );
})