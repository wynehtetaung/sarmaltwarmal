require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const adminRouter = require("./router/admin.router.js");

app.use(express.json());

app.use("/api/v1/admin", adminRouter);

mongoose
  .connect(
    process.env.MONGO_LOCAL_STR || "mongodb://127.0.0.1:27017/sarmaltwarmal"
  )
  .then(() => console.log(`mongodb connect!`))
  .catch((e) => console.log(`mongodb error : ${e}`));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) console.log(`Error : ${err}`);
  console.log(`server is running at ${process.env.PORT || 3000}`);
});
