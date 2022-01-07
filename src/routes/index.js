const { login } = require("./user/");
const { addExperience, getExperiences } = require("./experiences/");

const addRoutes = (app) => {
  app.post("/v1/user/login", login);

  app.get("/v1/food/experiences", getExperiences);
  app.post("/v1/food/experiences", addExperience);
};

module.exports = { addRoutes };
