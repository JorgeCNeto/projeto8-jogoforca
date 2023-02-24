export default function Jogo(props){
    return (
        <div class="jogo">
            <div class="imagemForca">
                <img src={props.imagem} />
            </div>
            <div class="palavras">
                <button onClick={props.start} class="escolhaDePalavra">Escolher Palavra</button>
                <p class="palavraRenderizada">{props.palavraRenderizada}</p>
            </div>
        </div>
    )
}