const express = require("express")
const app = express();

app.get("/", (req,res) => {
  res.json({
    hey: "This Subdomain Takeover BY 0xabhijeet"
  });
});

app.listen(6969);