const express = require("express");
const app = express();

app.listen(process.env.PORT || 3000, (err) => {
  if (err) console.log(`Error : ${err}`);
  console.log(`server is running at ${process.env.PORT || 3000}`);
});
