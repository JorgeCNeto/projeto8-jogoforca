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
  const[desabilitado, setDesabilitado] = React.useState(true)
  const[erros, setErros] = React.useState(0)
  const[imagem, setImagem] = React.useState(forca0)
  const[palavraRenderizada, setPalavraRenderizada] = React.useState("")
  const[letrasTestadas, setLetrasTestadas] = React.useState("")
  const[palavraEscolhida, setPalavraEscolhida] = React.useState("")
  const[corFinal, setCorFinal] = React.useState("palavraRenderizada")
    
  

  function start(){
    const randomIndex = Math.floor(Math.random() * palavras.length)
    const palavra = palavras[randomIndex]   
    const palavraArray = palavra.split("")
    setPalavraEscolhida(palavraArray)
    let traco = []
    palavraArray.forEach(() => traco.push("_ "))
    setPalavraRenderizada(traco)    
    setDesabilitado(false)    
    setErros(0)
    setImagem(forca0)
    setCorFinal("palavraRenderizada")
    console.log(palavra, " palavra sortida")
  }

  function fimDeJogo (){
    setDesabilitado(true)  
      if(letrasTestadas.length < palavraEscolhida.lenght + 6){
        setPalavraRenderizada(palavraEscolhida)
        setCorFinal("verde")
      } else{
        setPalavraRenderizada(palavraEscolhida)
        setCorFinal("vermelho")
      }
  
  }


  // console.log(letrasTestadas, "array com as letras testadas")

  function verificarLetra (l){
    // const verificado = letrasTestadas.includes(l.innerHTML)   
    // if (!verificado){
    //   setLetrasTestadas([...letrasTestadas, l.innerHTML])
    // }
    
    // console.log(palavraEscolhida, " palavra sortida dentro da verificação")
    console.log(l.innerHTML.toLowerCase(), "letra pressionada")
    if(palavraEscolhida.includes(l.innerHTML.toLowerCase())){
       
      for (let i = 0 ; i < palavraEscolhida.length; i++){
        let novaPalavra = [...palavraRenderizada]      
        if(palavraEscolhida[i] === l.innerHTML.toLowerCase()){          
          palavraRenderizada.splice(i, 1, l.innerHTML.toLowerCase())
          console.log(palavraRenderizada, "nova palavra")
        }
        
      }
      const novaPalavra = palavraRenderizada
      setPalavraRenderizada(novaPalavra)
      console.log(palavraRenderizada, "palavra renderizada")
     
      // console.log(posicoesLetras)
      if(!palavraRenderizada.includes("_")){
        fimDeJogo()
      }
            

    }else {
     
      setErros(erros + 1)
       
      if(imagem === forca0){
        setImagem(forca1)
      } else if (imagem === forca1){
        setImagem(forca2)
      } else if (imagem === forca2){
        setImagem(forca3)
      } else if (imagem === forca3){
        setImagem(forca4)
      } else if (imagem === forca4){
        setImagem(forca5)
      } else if (imagem === forca5){
        setImagem(forca6)
        fimDeJogo();
      }
      
    }
    // setDesabilitado(true)
    
  }

  return (
    <div class="conteudo">
      <Jogo imagem={imagem} start={start} corFinal={corFinal} palavraRenderizada={palavraRenderizada}/>
      <Letras cor={(desabilitado) ? "desabilitado" : "letra"} habilitar={desabilitado} verificarLetra={verificarLetra}/>
    </div>
  );
}

export default App;
