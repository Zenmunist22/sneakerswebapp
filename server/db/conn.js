const mongoose = require('mongoose');

const Db = process.env.ATLAS_URI;

mongoose.connect(db, {
  useNewUrlParser : true,
  useUnifiedTopology : true
}).then(()=>{
  console.log("connection successful")
}).catch((e)=>{
  console.log(e);
})