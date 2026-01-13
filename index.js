// Exemple minimal pour s'assurer que l'app utilise process.env.PORT
// Adapte ceci en fonction de ton code Dyad existant
const http = require('http');
// Si Dyad fournit un serveur, adapte : const server = createDyadServer(...);
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Dyad app running\n');
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});