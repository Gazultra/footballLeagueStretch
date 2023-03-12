const Teams = require("./model");


const addTeam = async (req,res) => {
    try {
        const Team = await Team.create(req.body)
        res.status(200).json({ message: "League Added", result: author});
    }catch (error){
        res.status(501).json({ errorMessage: error.message, error:error}); 

    }
}

const getAllTeams = async (req,res) => {
    try{
        const team = await Team.findAll()
        

        res.status(200).json({ message: "sucess", result:league})
    }catch (error) { 
        res.status(501).json({ errorMessage: error.message, error:error}); 
    }
}


const updateLeague = async (req, res) => {
    try{
    
    console.log(req.body)
    
    const leagueUpdated = await League.update({League:req.body.newLeague},{
    where: {
        title: req.body.league,
        
    }
    });
        res.status(201).json({message: "League Position Updated", teams: teamUpdated})
    }catch(error){
        res.status(501).json({errorMessage: error.message, error: error});
    
    }
    }

    const deleteTeam = async (req,res) => {
        try {
            const result = await team.destroy({where: {League: req.body.team}});
            res.status(201).json({ message: "Relegated", result: result});
        }catch (error) {
            res.status(501).json({ errorMessage: error.message, error:error});
        }
        };
    
     const getOneTeam = async(req,res) => {
        try{
            const allTeams = await Teams.findOne()
            res.status(201).json({ message: "success", result: allBooks});
        }catch (error) {
            res.status(501).json({ errorMessage: error.message, error:error}); 
        }
     }
    


module.exports = {

    addTeam, 
    getAllTeams,
    updateLeague,
    deleteTeam, 
    getOneTeam


}