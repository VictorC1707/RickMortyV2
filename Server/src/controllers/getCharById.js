const URL = "https://rickandmortyapi.com/api/character/"
const axios = require("axios")

   function getCharById(req, res) {
    const {id} = req.params
     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => {
         const {id,name, status, species, gender, origin, location, image } = response.data;
         const character = {id,
           name,
           gender,
           species,
           origin,
           location,
           image,
           status,
         };
         return res.status(200).json(character);
       })
       .catch((error) => {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
       });
   }

   module.exports = getCharById;