const express = require("express");
const mongoose = require("mongoose");
const app = express();
//const port = 3000;
app.use(express.json());
var config = require("./config");

//env
// console.log(process.env.NODE_ENV);
// console.log(process.env.PORT);

//routes

const productRoutes = require("./routes/ProductRoutes");

//use

app.use("/api",productRoutes);



mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(config.PORT, () => {
  console.log(`Example app listening at http://localhost:${config.PORT}`);
});

module.exports = app;