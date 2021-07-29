import React from "react"
import axios from "axios"

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
    
    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, body, {
            headers: {
                Authorization: "Rodolfo-Dornelas-Lovelace"
            }
        })
        .then((res) => {
            alert("Usuario cadastrado com sucesso")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
        console.log (this.state)
    }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaUsuarios}>Ir Para Lista de Usuarios</button>
                <h1>Cadastro</h1>
                <input 
                placeholder="Nome"
                value={this.state.nome}
                onChange={this.handleNome}
                />
                <input 
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}
