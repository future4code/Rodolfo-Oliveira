//EXERCICIO DE LEITURA 1
// "Matheus Nachtergaele"
// "Denise Fraga"
// "Globo", "14h"

// EXERCICIO DE LEITURA 2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro) //Juca, 3, SRD
// console.log(gato) // Juba, 3, srd
// console.log(tartaruga) //Jubo, 3, srd

// B: a sintaxe ... nos permite copiar e também alterar todo o conteudo do objeto para outro sem alterar o original

//EXERCICIOS DE ESCRITA
//EXERCICIO DE ESCRITA 1:

// const pessoa = { 
//     nome: "Josiane",
//     apelidos: ["Josi" , "Pequena" , "xuxu"]
// }
// // console.log (`Eu me chamo ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
// const novaPessoa = {
//     ...pessoa,
//     apelidos:["Josinha","josao","joseira"]
// }
// // console.log (`Eu me chamo ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos}`)
// function chamarPessoa(novaPessoa) {
//     console.log (`Eu me chamo ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos}`)
// }
// console.log (chamarPessoa(novaPessoa))

// Exercicio de escrita 2
//A:
// const pessoaUm = {
//     nome: "Rodolfo",
//     idade: 29,
//     profissao: "estudante",
// }
// const pessoaDois = {
//     nome: "Bianca",
//     idade: 22,
//     profissao: "advogada",
// }

// //B:
function showArray(objeto) {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao];
}
console.log (showArray(pessoaUm))
console.log (showArray(pessoaDois))

// A:

const carrinho = []
//B:

const frutaUm = {
    nome: "Melão",
    disponibilidade: false,
}

const frutaDois = {
    nome: "Uva",
    disponibilidade: true,
}
const frutaTres = {
    nome: "maçã",
    disponibilidade: true,
}

// C:
function objetoFruta(frutaPush) {
    carrinho.push(frutaPush)
}
objetoFruta(frutaUm)
objetoFruta(frutaDois)
objetoFruta(frutaTres)

console.log (carrinho)
