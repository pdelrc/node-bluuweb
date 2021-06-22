const express = require("express");
const router = express.Router();

const Mascota = require('../models/Mascota')

router.get("/", async (req, res) => {

    try {
        
        const arrayMascotasDB = await Mascota.find();
        console.log(arrayMascotasDB);

        res.render("mascotas.ejs", {
        arrayMascotas : arrayMascotasDB
    })

    } catch (error) {
        console.log(error)
    }

    
})

module.exports = router;