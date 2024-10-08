function errorHandler(error, response) {
  console.log(error);
  response.status(500).send("Ups, something were wrong");
}

module.exports = { errorHandler };
