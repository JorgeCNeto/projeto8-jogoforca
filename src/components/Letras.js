const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras (props) {
    return(
        <div class="letrasRenderizadas">
            {alfabeto.map((l) => <button onClick={props.verificarLetra} class={props.cor} disabled={props.habilitar}>{l.toUpperCase()}</button>)}            
        </div>
    )
}