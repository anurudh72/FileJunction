

const mongoose=require("mongoose");

function connectDB(){
  // Database connection
  mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  const db= mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', function(){
      console.log ("Database Connected");
  });
}


module.exports=connectDB;
