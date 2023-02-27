import React from "react"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras (props) {
   
   

    return(
        <div class="letrasRenderizadas">
            {alfabeto.map((l) => <Letra habilitar={props.habilitar} cor={props.cor} verificarLetra={props.verificarLetra} l={l}/>)}            
        </div>
    )
}

function Letra (props){
    const[selecionado, setSelecionado] = React.useState(false)

    function desabilitar (){
        setSelecionado(true)
    }

    return (<button 
                key={props.l} 
                class={props.habilitar || selecionado? "desabilitado" : "letra"} 
                onClick={(event) => {
                    props.verificarLetra(event.target) 
                    desabilitar();
                }} 
                disabled={props.habilitar || selecionado}
                >
                 {props.l.toUpperCase()}
            </button>
    )
}