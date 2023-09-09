const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoDBURI = "mongodb://localhost:27017/data";
mongoose
  .connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(" DB connected");
  });


const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());

const visualizeDataRoutes = require("./routes/visualizedata.routes");
app.use('/',visualizeDataRoutes);



const PORT = 3360;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
