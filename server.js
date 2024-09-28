require("dotenv").config();

const express = require("express");
const cors = require("cors");
const weather = require("./data/weather.json");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/weather", handleWeather);
app.use("*", (require, response) =>
  response.status(404).send("Page not fond : C")
);

function handleWeather(require, response) {
  let { searchQuery } = require.query;
  const city = weather.find(
    (city) => city.city_name.toLowerCase() === searchQuery.toLowerCase()
  );
  try {
    const weatherArray = city.data.map((day) => new Forecast(day));
    response.status(200).sead(weatherArray);
  } catch (error) {
    errorHandler(error, response);
  }
}

function Forecast(day) {
  this.day = day.valid_date;
  this.description = day.weather.description;
}

function errorHandler(error, response) {
  console.log(error);
  response.status(500).send("Ups, something were wrong");
}

app.listen(PORT, () => console.log(`El servidor esta corriendo en ${PORT}.`));
