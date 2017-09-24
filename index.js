const http = require('http')

const service = require('./service')

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {

  if (req.method === 'GET') {    

    res.writeHead(200, {'Content-Type': 'application/json'})    
    res.write(JSON.stringify(service(req)))
    res.end()

  }

}).listen(port, hostname, function(){
  console.log('Server running at http://${' + hostname + '}:${' + port + '}/');
})