function Forecast(day) {
  this.day = day.datetime;
  this.description = day.weather.description;
  this.country_code = day.country_code;
}

module.exports = { Forecast };
