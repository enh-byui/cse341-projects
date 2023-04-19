const awesomeFunction = (req, res, next) => {
  res.json("Jhon Doe");
};

const anotherPerson = (req, res, next) => {
    res.json("Vic Swang");
  };

module.exports = { awesomeFunction, anotherPerson };
