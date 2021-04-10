require("dotenv").config();
const jwtToken = process.env.JWT_TOKEN;

module.exports = {
  jwtToken,
};
