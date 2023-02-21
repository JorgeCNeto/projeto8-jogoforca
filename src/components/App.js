import React from "react"
import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "../palavras"
import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"



function App() {
  const[corDesabilitado, setCorDesabilitado] = React.useState("desabilitado")
  const[desabilitado, setDesabilitado] = React.useState(true)
  const letra = l.toUpperCase();

  function start(){
    setDesabilitado(false)  
    setCorDesabilitado("letra")
  }

  function verificarLetra (){
    // if(palavraRenderizada)
    console.log(l)
  }

  return (
    <div class="conteudo">
      <Jogo imagem={forca0} start={start}/>
      <Letras cor={corDesabilitado} habilitar={desabilitado} verificarLetra={verificarLetra}/>
    </div>
  );
}

export default App;
