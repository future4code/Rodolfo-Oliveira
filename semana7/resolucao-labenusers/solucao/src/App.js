import React from "react"
import TelaCadastro from "./components/TelaCadastro"
import TelaListaUsuarios from "./components/TelaListaUsuarios"

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaUsuarios={this.selecionaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.selecionaCadastro}/>
      default:
        return <TelaCadastro />
    }
  }
  selecionaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }
  
  selecionaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render(){
    return(
      <div>
       {this.escolheTela()}
      </div>
    )
  }
}