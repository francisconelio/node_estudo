const {error} = require("console");
const fs = require("fs");
fs.mkdir("pasta", (error)=>{console.log(error)});

const conteudo = 'Olá eu sou o conteudo'

fs.writeFile('error.txt', conteudo,(error)=>{if(error){
    console.log(error);
}
});