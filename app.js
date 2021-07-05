// Espress

const express = require("express");
const app = express();

// BODY
// parse application/x-www-form-urlencoded
// parse application/json

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Dotenv

require("dotenv").config();
const port = process.env.PORT || 3000;

// MONGOOSE: conexion a base de datos mongoose
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ao3ji.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log("Base de datos conectada"))
  .catch((e) => console.log(e));

// motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

// rutas webs
app.use("/", require("./router/RutasWeb"));
app.use("/mascotas", require("./router/Mascotas"));

app.use((req, res, next) =>
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "titulo del sitio web",
  })
);

app.listen(port, () =>
  console.log("Servidor a su servicio desde el puerto", port)
);
