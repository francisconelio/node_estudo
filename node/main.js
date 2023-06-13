const http = require('http')
const server = http.createServer((request, reponse) => {
    console.log(request.url)
    response.writeHead()
    response.end('<h1>olá</h1>')
});

server.listen(8080, () => {console.log('ouvindo req na porta 8080')})