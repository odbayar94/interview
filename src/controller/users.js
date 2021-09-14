const axios = require("axios");
const fs = require("fs");

const usersData = JSON.parse(fs.readFileSync(__dirname + "/users.json"));

exports.getUser = (req, res, next) => {
  const userId = req.params.id;

  let message = userId === "123" ? "Hold on" : "Go on";
  return res.status(200).json({
    success: true,
    data: `${req.params.id} ${message}`
  });
};

exports.getUsers = async (req, res, next) => {
  let result;
  try {
    result = await axios(
      "https://forkify-api.herokuapp.com/api/search?q=pizza"
    );
  } catch (error) {
    return res.status(400).json({
      success: false,
      data: error
    });
  }
  let log = usersData.filter(function (el) {
    return el.role === "admin";
  });

  let avarageAge = avarage(log);
  console.log(avarageAge);

  return res.status(200).json({
    success: true,
    data: log
  });
};

exports.createUser = (req, res, next) => {
  return res.status(200).json({
    success: true,
    data: "Success fully add"
  });
};

function avarage(arr) {
  let sumAge = 0;

  arr.forEach((element) => {
    sumAge += element.age;
  });
  return Math.ceil(sumAge / arr.length);
}
