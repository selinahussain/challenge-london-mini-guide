const express = require("express");
const app = express();

const stratfordPharm = require("./data/Stratford.json");

//stratford pharmacies

app.get("/pharmacies", (req, res) => {
  res.json(stratfordPharm);
})

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});