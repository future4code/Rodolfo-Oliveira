import React from "react"


export default class TelaCadastro extends React.Component {
    state ={
        nome:"",
        email:""
    }
    handleNome = (event) => (
        this.setState({nome: event.target.value})
    )
    handleEmail = (event) => (
        this.setState({email: event.target.value})
    )

    render(){
        return(
            <div>
                <button onClick={this.props.irParaUsuarios}>Ir Para Lista de Usuarios</button>
                <h1>Cadastro</h1>
                <input 
                placeholder="Nome"
                value={this.state.name}
                onChange={this.handleNome}
                />
                <input 
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmail}
                />
                <button>Cadastrar</button>
            </div>
        )
    }
}
