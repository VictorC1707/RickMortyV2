const users = require("../utils/users")

function login(req, res) {
    const{email,password} = req.query;

    const userFind = users.find( user => user.email === email && user.password === password)

    if(userFind){
        res.status(200).json({access: true})
    }else{
        res.status(400).json({access: false})
    }
   }

   module.exports = {login};