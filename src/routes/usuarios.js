var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/listar/:fkEmpresa", function (req, res) {
    usuarioController.listarPorEmpresa(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar-user", function (req, res) {
    usuarioController.cadastrarUser(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/receberUsuarios", function (req, res) {
    usuarioController.receberUsuarios(req, res);
});

module.exports = router;