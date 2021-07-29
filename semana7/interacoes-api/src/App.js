import axios from "axios";
import React from "react";

const url = 
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const urlCadastro =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
  headers:{
    Authorization: "rodolfo-dornelas-lovelace"
  }
};

export default class App extends React.Component {
  state = {
    usuarios: [],
    inputNome: "",
    inputEmail: "",
  };


mundaInputNome = (event) => {
  this.setState({inputNome: event.target.value})
}

mudaInputEmail = (event) => {
  this.setState({inputEmail: event.target.value})
}

pegarListaUsuarios = () => {
  axios
    .get(url, headers)
    .then((res) =>{
      this.setState({usuarios: res.data.result.list });
    })
    .catch((err) =>{
      alert(err.response.data)
    });
};
criaNovoUsuario = () => {
  const body = {
    "name": this.state.inputNome,
    "email": this.state.inputEmail
  };
  axios
    .post(urlCadastro, body, headers)
    .then((res) => {
      this.setState({inputEmail: ""},);
      this.setState({inputNome: ""})
      this.pegarListaUsuarios();
      console.log(res)
    })
    .catch((err) => {
      alert("blablalba");
      console.log(err)
    });
}

render() {
  const componentesUsuarios = this.state.usuarios.map((user) => {
     return <li key={user.id}>{user.name}</li>;
  });

  return (
    <div>
      <h1>Labenusers</h1>
      Nome: <input
      value={this.state.inputNome}
      onChange={this.mundaInputNome}/>
      Email:<input
      value={this.state.inputEmail}
      onChange={this.mudaInputEmail}/>
      <button onClick={this.criaNovoUsuario}>Enviar</button>
      {componentesUsuarios}
    </div>    
  );
}
}
