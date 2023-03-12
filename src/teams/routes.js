const {Router} = require("express")

const teamRouter = Router();

const { addTeam, getAllTeams, updateLeague, deleteTeam, getOneTeam} = require("./controllers");

teamRouter.post("/books/addteam", addTeam);
teamRouter.get("/books/getallbooks", getAllTeams)
teamRouter.put("/books/updateleague", updateLeague )
teamRouter.put("/books/deleteteam", deleteTeam )
teamRouter.get("/books/getoneteam", getOneTeam )
teamRouter.get("/authors/getmanagerandleague/:managername")
teamRouter.get("/genres/getleagues/:league")

module.exports = teamRouter;