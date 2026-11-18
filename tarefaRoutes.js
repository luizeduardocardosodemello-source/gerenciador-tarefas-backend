const express = require("express");
const controller = require("./tarefaController");
const router = express.Router();

router.get("/", controller.listarTarefas);
router.get("/:id", controller.buscarTarefa);
router.post("/", controller.criarTarefa);
router.put("/:id", controller.atualizarTarefa);
router.delete("/:id", controller.excluirTarefa);

module.exports = router;
