const Manager = require("./model");
const Teams = require("../teams/model");

const addManager = async (req,res) => {
    try{
        const manager = await Manager.create(req.body)
        res.status(200).json({ message: "Manager Added", result: manager});

    }catch (error){
    res.status(501).json({ errorMessage: error.message, error:error}); 
    }
}

const getManagerAndTeam = async (req,res) => {
    try{
        const manager = await Manager.findOne({
            where: { managerName: req.params.manager }, 
            include: Team, 
        });
        res.status(200).json({ message: "success", result: author});
    }catch (error) { 
        res.status(501).json({ errorMessage: error.message, error:error}); 
    }
 }

 module.exports = {


 addManager, 
 getManagerAndTeam,

 }

