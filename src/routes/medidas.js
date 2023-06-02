var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idLote", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idLote", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/receberLotes", function (req, res) {
    medidaController.receberLotes(req, res);
});

router.post("/receber-temperatura-lotes", function (req, res) {
    medidaController.receberTemperaturaLotes(req, res);
});

module.exports = router;