

export default function Jogo(props){
    return (
        <div class="jogo">
            <div class="imagemForca">
                <img src={props.imagem} />
            </div>
            <div class="palavras">
                <button onClick={props.start} class="escolhaDePalavra" disabled={props.habilitar}>Escolher Palavra</button>
                <p>Palavra renderizada</p>
            </div>
        </div>
    )
}