const express = require("express");
const router = express.Router();

const Mascota = require("../models/Mascota");

router.get("/", async (req, res) => {
  try {
    const arrayMascotasDB = await Mascota.find();
    console.log(arrayMascotasDB);

    res.render("mascotas.ejs", {
      arrayMascotas: arrayMascotasDB,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/crear", (req, res) => {
  res.render("crear");
});

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    await Mascota.create(body);
    res.redirect("/mascotas");
    console.log("mascota creada: ", mascotaDB);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const mascotaDB = await Mascota.findOne({ _id: id });
    console.log(mascotaDB);

    res.render("detalle", {
      mascota: mascotaDB,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.render("detalle", {
      error: true,
      mensaje: "no se encuentra el id seleccionado",
    });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const mascotaDB = await Mascota.findByIdAndDelete({ _id: id });
    if (mascotaDB) {
      res.json({
        estado: true,
        mensaje: "eliminado",
      });
    } else {
      res.json({
        estado: false,
        mensaje: "fallo eliminar",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const mascotasDB = await Mascota.findByIdAndUpdate(id, body, {
      useFindAndModify: false,
    });

    res.json({
      estado: true,
      mensaje: "editado",
    });
  } catch (error) {
    console.log(error);
    res.json({
      estado: false,
      mensaje: "fallomos!",
    });
  }
});

module.exports = router;
