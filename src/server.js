require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5001;
const Teams = require("./teams/model");
const Manager = require("./managers/model");
const League = require("./leagues/model");
const managerRouter = require("./managers/routes");
const teamRouter = require("./teams/routes");
const leagueRouter = require("./leagues/routes");
app.use(express.json());











app.use(leagueRouter);
app.use(managerRouter);
app.use(teamRouter);

app.get("/health", (req, res) => 
res.status(200).json({message: " API is working})"})
);

app.listen(port, () => {
    syncTables()
    console.log('server is listening on port ${port}');
});