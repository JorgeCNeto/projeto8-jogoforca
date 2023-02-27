export default function Jogo(props){
    return (
        <div class="jogo">
            <div class="imagemForca">
                <img src={props.imagem} data-test="game-image"/>
            </div>
            <div class="palavras">
                <button onClick={props.start} class="escolhaDePalavra" data-test="choose-word">Escolher Palavra</button>
                <p class={props.corFinal} data-test="word">{props.palavraRenderizada}</p>
            </div>
        </div>
    )
}

