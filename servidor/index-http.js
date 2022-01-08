import http from "http";
//const http = require("http");

const server = http.createServer((req,res)=>{

    res.writeHead(200,{ "Content-Type": "application/json" });
    res.write(JSON.stringify([
        {
            codigo: 1, 
            nombre: "producto 1", 
            precio: 10, 
            cantidad: 2
        },
        {
            codigo: 2, 
            nombre: "producto 2", 
            precio: 12, 
            cantidad: 4
        }
    ]));
    res.end();

})

server.listen(5000, ()=> {
    console.log("Servidor escuchando el puerto 5000");
})

