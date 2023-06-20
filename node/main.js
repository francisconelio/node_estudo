const http = require('http');
const fs = require("fs");

function pegaArquivo(nome) {

    fs.readFile('cidades.json', 'utf8' (err,data) => {
        if (err)
    })




}
const server = http.createServer((request, response) => {
    console.log(request.url)
    if(request.url == "/hello") {
    response.end("<h1>Hello World</h1>")
} else if (request.url == "/cidades") {
    const arquivo = pegarArquivo()
    const data = JSON.parse(arquivo)
    response.setHeader('Content-Type', 'aplication/json')
    response.end(JSON.stringify(cidades))
} else {
        response.statusCode = 404;
        response.end('<h1>Not found</h1>')
    }
});

server.listen(8080, () => {console.log('ouvindo req na porta 8080')})