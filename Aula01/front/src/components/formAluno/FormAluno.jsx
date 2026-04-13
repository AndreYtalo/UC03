import { useEffect, useState } from "react";

export function FormAluno({ salvarAluno, alunoEmEdicao, cancelarEdicao }) {

    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [nota, setNota] = useState("");

    useEffect(() => {
        if (alunoEmEdicao) {
            setNome(alunoEmEdicao.nome);
            setCurso(alunoEmEdicao.curso);
            setNota(alunoEmEdicao.nota);
        }else {
            setNome("");
            setCurso("");
            setNota("");
        }
    }, [alunoEmEdicao]);
    function handlesubmit(e) {
        e.preventDefault();
        const alunoData = {
            nome: nome,
            curso: curso,
            nota: nota
        };
        salvarAluno(alunoData);
    }
return(
    <form onSubmit={handlesubmit}>
        <input
            type="text"
            placeholder="Nome"
            step="0.01"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
        />
        <input
            type="text"
            placeholder="Curso"
            step="0.01"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
        />
        <input
            type="number"
            placeholder="Nota"
            step="0.01"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
        />
        <button type="submit" className="glitch">▶ SALVAR ALUNO</button>
        <button type="button" onClick={cancelarEdicao} className="glitch">
            ✕ CANCELAR
        </button>
    </form>
)
}