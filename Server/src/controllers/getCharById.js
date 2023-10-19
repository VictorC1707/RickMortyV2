const axios = require('axios');

   function getCharById(res, id) {
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
         res.writeHead(200,{"Content-Type": "application/json"});
         res.end(JSON.stringify(character))
       })
       .catch((error) => {
         res.writeHead(200,{"Content-Type": "text/plain"});
         res.end(error.message);
       });
   }

   module.exports = getCharById;