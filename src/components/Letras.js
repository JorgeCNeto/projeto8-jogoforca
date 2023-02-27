import React from "react"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras (props) {
    const[selecionado, setSelecionado] = React.useState(false)

    function desabilitar (){
        setSelecionado(true)
    }

    return(
        <div class="letrasRenderizadas">
            {alfabeto.map((l) => <button key={l} onCLick={desabilitar} onClick={(event) => props.verificarLetra(event.target)} class={props.cor} disabled={props.habilitar || selecionado}>{l.toUpperCase()}</button>)}            
        </div>
    )
}