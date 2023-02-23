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
  const[erros, setErros] = React.useState(0)
  const[imagem, setImagem] = React.useState(forca0)
  const[palavraRenderizada, setPalavraRenderizada] = React.useState("")
  

  function start(){
    const randomIndex = Math.floor(Math.random() * palavras.length)
    const numeroDeLetras = palavras[randomIndex]
    console.log(numeroDeLetras, " palavra sortida")
    setPalavraRenderizada(numeroDeLetras.replace(/[a-z\s]/g, "_ "))    
    setDesabilitado(false)  
    setCorDesabilitado("letra")    
  }

  function verificarLetra (){
    // if(palavraRenderizada ){

    // }else {
    //   setErros(erros + 1)

    //   if(image = forca0){
    //     setImagem(forca1)
    //   } else if (imagem = forca1){
    //     setImagem(forca2)
    //   } else if (imagem = forca2){
    //     setImagem(forca3)
    //   } else if (imagem = forca3){
    //     setImagem(forca4)
    //   } else if (imagem = forca4){
    //     setImagem(forca5)
    //   } else if (imagem = forca5){
    //     setImagem(forca6)
    //     fimDeJogo();
    //   }
      
    // }
    // setCorDesabilitado("desabilitado")
    // setDesabilitado(true)
    
  }

  return (
    <div class="conteudo">
      <Jogo imagem={imagem} start={start} palavraRenderizada={palavraRenderizada}/>
      <Letras cor={corDesabilitado} habilitar={desabilitado} verificarLetra={verificarLetra}/>
    </div>
  );
}

export default App;
