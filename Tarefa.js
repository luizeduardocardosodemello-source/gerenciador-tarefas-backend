const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema({
  titulo: { type: String, required: [true, "O título é obrigatório"], trim: true, maxlength: 100 },
  descricao: { type: String, trim: true, maxlength: 500, default: "" },
  status: { type: String, enum: ["Pendente", "Em andamento", "Concluída"], default: "Pendente" },
  prioridade: { type: String, enum: ["Baixa", "Média", "Alta"], default: "Média" }
}, { timestamps: true });

module.exports = mongoose.model("Tarefa", tarefaSchema);
