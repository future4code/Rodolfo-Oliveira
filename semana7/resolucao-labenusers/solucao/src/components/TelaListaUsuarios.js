import React from "react"


export default class TelaListaUsuarios extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir Para a tela de Cadastro</button>
                <h1>Lista de Usuarios</h1>
            </div>
        )
    }
}
