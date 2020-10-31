const express = require("express");
const app = express();

const stratfordData = require("./data/Stratford.json");
const heathrowData = require("./data/Heathrow.json");
const harrowData = require("./data/Harrow.json");


app.get("/", (req, res) => {
  res.send("try /pharmacies");
})

//stratford pharmacies

app.get("/pharmacies", (req, res) => {
  res.json(stratfordData.pharmacies);
})

app.get("/colleges", (req, res) => {
  res.json(stratfordData.colleges);
})

app.get("/doctors", (req, res) => {
  res.json(stratfordData.doctors);
})

app.get("/hospitals", (req, res) => {
  res.json(stratfordData.hospitals);
})



const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});