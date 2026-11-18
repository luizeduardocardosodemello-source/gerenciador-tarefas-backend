const Tarefa = require("../models/Tarefa");

async function listarTarefas(req, res) {
  try { res.json(await Tarefa.find().sort({ createdAt: -1 })); }
  catch (error) { res.status(500).json({ mensagem: error.message }); }
}
async function buscarTarefa(req, res) {
  try {
    const tarefa = await Tarefa.findById(req.params.id);
    if (!tarefa) return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    res.json(tarefa);
  } catch (error) { res.status(400).json({ mensagem: "ID inválido" }); }
}
async function criarTarefa(req, res) {
  try {
    const tarefa = await Tarefa.create(req.body);
    res.status(201).json(tarefa);
  } catch (error) { res.status(400).json({ mensagem: error.message }); }
}
async function atualizarTarefa(req, res) {
  try {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!tarefa) return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    res.json(tarefa);
  } catch (error) { res.status(400).json({ mensagem: error.message }); }
}
async function excluirTarefa(req, res) {
  try {
    const tarefa = await Tarefa.findByIdAndDelete(req.params.id);
    if (!tarefa) return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    res.status(204).send();
  } catch (error) { res.status(400).json({ mensagem: "ID inválido" }); }
}
module.exports = { listarTarefas, buscarTarefa, criarTarefa, atualizarTarefa, excluirTarefa };
