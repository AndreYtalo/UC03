import { useEffect, useState } from "react";

import "./alunosPages.css"


import ListaAlunos from "../components/listaAlunos/ListaAlunos";
import { FormAluno } from "../components/formAluno/FormAluno";
import { listarAlunos, criarAluno, atualizarAluno, excluirAluno } from "../services/alunoService";

export default function AlunosPage() {
    const [alunos, setAlunos] = useState([]);
    const [alunoEmEdicao, setAlunoEmEdicao] = useState(null);

    async function carregarAlunos() {
        try {
            const response = await listarAlunos();
            setAlunos(response.data.alunos);
        } catch (error) {
            console.error("Erro ao carregar alunos:", error.message);
        }
    }
    useEffect(() => {
        carregarAlunos();
    }, []);

    async function salvarAluno(Dados) {
        try {
            if (alunoEmEdicao) {
                await atualizarAluno(alunoEmEdicao.id, Dados);
                setAlunoEmEdicao(null);

            } else{
                await criarAluno(Dados);
            }
            await carregarAlunos();
        } catch (error) {
            console.error("Erro ao salvar aluno:", error);
        }
    }
    async function removerAluno(id) {
        try {
            await excluirAluno(id);
            await carregarAlunos();
        } catch (error) {
            console.error("Erro ao remover aluno:", error);
        }
    }
    function editarAluno(aluno) {
        setAlunoEmEdicao(aluno);

    }
    function cancelarEdicao() {
        setAlunoEmEdicao(null);
    }

    return (
        <div style={{ padding: '2rem', minHeight: '100vh' }}>
            {/* Status Display Gamer */}
            <div className="score-display">
                <h3>📊 DATABASE STATUS</h3>
                <p>ALUNOS CADASTRADOS: {alunos.length} | SISTEMA OPERACIONAL</p>
            </div>

            {/* Form Section */}
            <div className="terminal-text">
                <strong>▶ FORMULÁRIO DE CADASTRO</strong><br/>
                Preencha os dados do aluno para inserir no sistema.
            </div>

            <FormAluno
                alunoEmEdicao={alunoEmEdicao}
                cancelarEdicao={cancelarEdicao}
                salvarAluno={salvarAluno}
            />

            {/* Table Section */}
            <div className="terminal-text">
                <strong>▶ LISTA DE ALUNOS</strong><br/>
                Visualize e gerencie todos os alunos cadastrados.
            </div>

            <ListaAlunos
                alunos={alunos}
                editarAluno={editarAluno}
                removerAluno={removerAluno}
            />
        </div>
    )


}
