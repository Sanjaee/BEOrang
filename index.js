require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const sellAtRouter = require("./app/routers/sellAtRouter");
// const categoryRouter = require("./app/routers/categoryRouter");
// const soldAtRouter = require("./app/routers/soldAtRouter");
const userAuthRouter = require("./app/routers/userAuthRouter");
const url =
  "mongodb+srv://DBtokped:DBtokped@dbtokped.asxjz2d.mongodb.net/?retryWrites=true&w=majority&appName=DBtokped";
const app = express();
const port = process.env.PORT || 3000;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());
app.use(cors());
// app.use(sellAtRouter);
// app.use(categoryRouter);
// app.use(soldAtRouter);
app.use(userAuthRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
