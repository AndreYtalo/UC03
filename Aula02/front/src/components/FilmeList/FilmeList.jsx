import FilmeCard from "../FilmeCard/FilmeCard"
export default function FilmeList({ filmes = [] }) {
    const filmesValidos = Array.isArray(filmes) ? filmes : [];
    return (

        <>
            {filmesValidos.length === 0 ?
                (
                    <p> Nenhum filme cadastrado.</p>
                ) :

                <section className="grid-filmes">
                        {
                            filmesValidos.map((filme) =>(
                                <FilmeCard
                                    key={filme.id}
                                    filme={filme}
                                />
                            ))
                        }
                </section>
            }
        </>
    )
}