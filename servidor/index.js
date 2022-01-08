import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

let lastId = 1;
let productos =[
    {
        "id": lastId,
        "image": "/images/filtro1.jpg",
        "title": "F6 F7 F8 F9 carton",
        "name": "F6 F7 F8 F9 carton",
        "price": 229.9
    }
];

const app = express();

app.use(cors());
app.use(bodyParser.json({ type: 'application/json'}));
app.use(logs);

app.get("/", (req,res)=>{res.send("<h1>API de productos</h1>")});

app.get("/productos", (req,res)=>{
    const filtro = req.query.filtro;
    if(filtro){
        res.json(productos.filter(p => p.nombre.indexOf(filtro) >= 0))
    }else{
        res.json(productos)
    }
});

app.post("/productos", (req,res)=>{
    lastId++;
    const producto = {...req.body, id: lastId};
    productos.push(producto);
    res.status(201);
    res.json(producto);
});

app.put("/productos/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const producto = productos.find(p => p.id == id)
    if(!producto){
        res.status(404);
        res.json({ mensaje: "No existe ningun producto con el id" + id});
    }else{
        const index = productos.indexOf(producto);
        const nuevoProducto = productos[index] = {...req.body, id};
        res.status(200);
        res.json(nuevoProducto);
    }
})

app.delete("/productos/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const producto = productos.find(p => p.id == id)
    if(!producto){
        res.status(404);
        res.json({ mensaje: "No existe ningun producto con el id" + id});
    }else{
        productos = productos.filter(x => x != producto);
        const index = productos.indexOf(producto);
        //delete productos[index];
        res.status(200);
        res.json({mesaje: "Producto eliminado"});
    }
})

app.get("/productos/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const producto = productos.find(p => p.id == id)
    if(!producto){
        res.status(404);
        res.json({ mensaje: "No existe ningun producto con el id" + id});
    }else{
        res.status(200);
        res.json(producto);
    }
})

const port = process.argv[2] | process.env.PORT | 5000

app.listen(5000, () =>{
    console.log("servidor express escuchado en el puerto 5000")
})

function logs(req, res, next){
    console.log(`${req.method}: ${req.originalUrl}`);
    next();
}