/*const { fruits, money } = require("./fruits.js")


var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "hi crjjj",
    e : "oO",
    T : "U "
}));



fruits.forEach(
    item => console.count(item)
    )

console.log("how much money I have in my pocket", money)*/




/*const http = require("http");

const server = http.createServer((req, res) => 
res.end("I'm raplying to your request v2"));

const puerto = 3000;

server.listen(puerto, () => console.log("listening to requests"))*/


const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views")


app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => 
res.render('index', {titulo: 'mi titulo dinamico'}));

app.get("/servicios", (req, res) =>
res.render("servicios", { tituloServicios: "Este es mensaje dinamico de servicios"}));

app.use((req, res, next) =>
res.status(404).render("404", { 
    titulo: "404",
    descripcion: "titulo del sitio web"
}))

app.listen(port, () =>
console.log("Servidor a su servicio desde el puerto", port))
