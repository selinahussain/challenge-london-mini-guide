const express = require("express");
const app = express();

const stratfordData = require("./data/Stratford.json");
const heathrowData = require("./data/Heathrow.json");
const harrowData = require("./data/Harrow.json");

//stratford pharmacies

app.get("/", (req, res) => {
  res.send("try /pharmacies");
})

app.get("/pharmacies", (req, res) => {
  res.json(stratfordData.pharmacies);
})

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});