import express from "express";
import "dotenv/config";
import cors from "cors";
import db from "./src/config/db.js";
import alunoRoutes from "./src/routes/alunoRoutes.js";
import { AlunoModel } from "./src/models/AlunoModel.js";


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
    cors(
        {
            origin: process.env.API_URL_FRONT
        }
    )
);
app.use("/alunos", alunoRoutes);

app.get("/", (req, res)=>{
    res.status(200).json({msg: "Hello World!"});
});

// Inicializar banco de dados e tabela
const inicializarBanco = async () => {
    try {
        await AlunoModel.criarTabelaSeNaoExistir();
        console.log("🎉 Banco de dados inicializado com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao inicializar banco de dados:", error.message);
    }
};

app.listen(PORT, async ()=>{
    console.log(`🚀 Aplicação rodando em http://localhost:${PORT}`);
    await inicializarBanco();
});
