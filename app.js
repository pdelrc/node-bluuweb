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


require("dotenv").config()


const port = process.env.PORT || 3000;

// conexion a base de datos
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ao3ji.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true}
)

.then (()=> console.log("Base de datos conectada"))
.catch (e => console.log(e))


// motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views")


app.use(express.static(__dirname + "/public"));

// rutas webs
app.use("/", require("./router/RutasWeb"));
app.use("/mascotas", require("./router/Mascotas"))

app.use((req, res, next) =>
    res.status(404).render("404", { 
        titulo: "404",
        descripcion: "titulo del sitio web"
}))

app.listen(port, () =>
console.log("Servidor a su servicio desde el puerto", port))
