const fs = require('fs');
const http = require('http');
const util = require('util');

// Convert fs.readFile into Promise version of same    
const readFile = util.promisify(fs.readFile);

const artimetic =  require('./arithmetic');
const logger = require('./logger').logger;

const PORT = process.env.PORT || 4000;

const requestListener =  async function (req, res) {
    const welcomeText = await readFile('./welcome.txt', 'utf8');
    res.writeHead(200);
    res.end(welcomeText);
  }
  
const server = http.createServer(requestListener);
server.listen(PORT, () => {
    logger(`Server Is Listning On Port ${PORT}`)
})