require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tarefaRoutes = require("./tarefaRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ mensagem: "API de tarefas funcionando" }));
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/tarefas", tarefaRoutes);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("Defina MONGODB_URI no arquivo .env");
  process.exit(1);
}
mongoose.connect(MONGODB_URI)
  .then(() => app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)))
  .catch(error => { console.error("Erro ao conectar ao MongoDB:", error.message); process.exit(1); });
