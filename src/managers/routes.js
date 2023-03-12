const {Router} = require("express");
const managerRouter = Router();

const {addManager, getManagerAndTeam} = require("./controllers");

managerRouter.post("/managers/addmanager", addManager);
managerRouter.get("/managers/getmanagerandteam/:author", getManagerAndTeam)

module.exports = managerRouter;
