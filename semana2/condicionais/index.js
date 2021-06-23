// // EXERCICCIOS DE LEITURA
// EXERCICIO 1:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// ```

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// Esse codigo tem como objetivo chegar se um numero é par ou não.
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Pares
// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Impares.

// EXERCICIO 2
// O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// serve para identificar o preço de uma fruta
// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta Maçã é R$2.25
// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
// impressa no console se retirássemos o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// O preço da fruta Pêra é de R$5

// EXERCICIO 3
// leia o codigo abaixo:
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }
// console.log (mensagem)


// a) O que a primeira linha está fazendo?
// pedindo um input ao usuario

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// "Esse numero passou no teste". se fosse o numero -10 nada apareceria no console

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim, havera. por estar dentro do escopo filho, o escopo global não tem acesso à variavel criada para mensagem. de forma que ela também não é declarada em nenhum lugar.
// EXERCICIO DE ESCRITA 1
// Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela 
// pode dirigir (apenas maiores de idade).
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// const num1 =prompt("qual é a sua idade?")
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// let idadeUsuario = Number(num1)
// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim,
//  imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
// if (idadeUsuario >= 18){
//     console.log ("Você pode dirigir")
// } else if ( idadeUsuario <= 17){
//     console.log ("você não pode dirigir.")
// }

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    

// const var1 = prompt ("em que turno você estuda? digite 'M' para Matutino, 'V' para vespertino, ou 'N' para noturno.")
// if (var1.toLocaleUpperCase() === "M"){
//     console.log ("Bom dia!")
// }else if(var1.toLocaleUpperCase() === "V"){
//     console.log ("Boa Tarde!")
// }else if(var1.toLocaleUpperCase() === "N"){
//     console.log ("Boa noite!")
// }

//EXERCICIO 3

// switch (var1.toLocaleUpperCase()){
//     case "M":
//         console.log ("Bom dia!")
//         break
//     case "V":
//         console.log ("Boa tarde!")
//         break
//     case "N":
//         console.log ("Boa noite!")
//         break
//     default:
//         console.log ("Não consegui entender.")
//     }

//  EXERCICIO 4
// const generoFilme = prompt("Qual é o genero do filme?")
// const valorFilme =Number(prompt("Qual o preço da entrada?"))
// const lanche = prompt("Qual snack você quer comprar?")
// if (generoFilme.toLocaleUpperCase() === "FANTASIA" && valorFilme < 15){
//     console.log ("Bom Filme!")
// }else if(generoFilme.toLocaleUpperCase() !== "FANTASIA" && valorFilme >= 15){
//     console.log (`Escolha outro filme :()`)
// }

// console.log (`Aproveite o seu(sua) ${lanche}!`)

// O desafio 2 fica pra mais tarde 