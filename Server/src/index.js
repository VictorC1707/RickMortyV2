let http = require("http");
const data = require("./utils/data");

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url.includes("/rickandmorty/character")) {
    let id = req.url.split('/');
    id = id[id.length - 1];

    let user = data.find(char => char.id === parseInt(id));
    console.log(user);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(user)); // Corregido para asegurarnos de que se envíe un JSON válido
  }
});

server.listen(3001, "localhost");