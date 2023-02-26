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
  const[selecionado, setSelecionado] = React.useState(false)
  const[corDesabilitado, setCorDesabilitado] = React.useState("desabilitado")
  const[erros, setErros] = React.useState(0)
  const[imagem, setImagem] = React.useState(forca0)
  const[palavraRenderizada, setPalavraRenderizada] = React.useState("")
  const[letrasTestadas, setLetrasTestadas] = React.useState("")
  const[palavraEscolhida, setPalavraEscolhida] = React.useState("")
  const[corFinal, setCorFinal] = React.useState("palavraRenderizada")
    
  

  function start(){
    const randomIndex = Math.floor(Math.random() * palavras.length)
    setPalavraEscolhida(palavras[randomIndex])  
    setPalavraRenderizada(palavraEscolhida.replace(/[a-z\s]/g, "_ "))  
    setCorDesabilitado("letra")  
    setDesabilitado(false)    
    setErros(0)
    setImagem(forca0)

    console.log(palavraEscolhida, " palavra sortida")
  }

  function fimDeJogo (){
    setDesabilitado(true)  
      if(letrasTestadas.length <= palavraEscolhida.lenght + 6){
        setPalavraRenderizada(palavraEscolhida)
        setCorFinal("verde")
      } else{
        setPalavraRenderizada(palavraEscolhida)
        setCorFinal("vermelho")
      }
  
  }


  // console.log(letrasTestadas, "array com as letras testadas")

  function verificarLetra (l, index){
    // const verificado = letrasTestadas.includes(l.innerHTML)   
    // if (!verificado){
    //   setLetrasTestadas([...letrasTestadas, l.innerHTML])
    // }
    // console.log(index, "index da letra no map")
    console.log(palavraEscolhida, " palavra sortida dentro da verificação")
    console.log(l.innerHTML.toLowerCase(), "letra pressionada")
    if(palavraEscolhida.includes(l.innerHTML.toLowerCase())){
      // console.log("entrou na condicional")  
      // const indexDaLetra = palavraEscolhida.findIndex(l.innerHTML.toLowerCase())
      // console.log(indexDaLetra, "index da letra na palavra")
      
      const posicoesLetras = []
      for (let i = 0 ; i < palavraEscolhida.length; i++){
        if(palavraEscolhida[i] === l.innerHTML.toLowerCase()){          
          setPalavraRenderizada(palavraRenderizada.replace("_", l.innerHTML.toLowerCase()))
        }
      }

      if(palavraRenderizada === palavraEscolhida){
        fimDeJogo()
      }
            

    }else {
      console.log("pulou a condicional")
      setErros(erros + 1)
      console.log(erros, "erros")
 
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
    setSelecionado(true)
    
  }

  return (
    <div class="conteudo">
      <Jogo imagem={imagem} start={start} corFinal={corFinal} palavraRenderizada={palavraRenderizada}/>
      <Letras cor={corDesabilitado} habilitar={desabilitado} selecionado={selecionado} verificarLetra={verificarLetra}/>
    </div>
  );
}

export default App;
