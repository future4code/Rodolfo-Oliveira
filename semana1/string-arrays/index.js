// // EXERCICIO DE LEITURA 1
// let array
// console.log('a. ', array) //undefined

// array = null
// console.log('b. ', array) //null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) //11

// let i = 0
// console.log('d. ', array[i]) // 3

// array[i+1] = 19
// console.log('e. ', array) // 3,19,5,6,7,8,9,10,11,12,13

// const valor = array[i+6]
// console.log('f. ', valor) //9

//EXERCICIO DE LEITURA 2:
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// "SUBI NUM ONIBUS EM MIRROCOS" é o que é impresso

//EXERCICIO DE ESCRITA 1

// let nome = prompt("Qual é o seu nome")
// let email = prompt("Qual é o seu email?")
// let boasVindas = `O email ${email} foi cadastrado com sucesso. Seja bem vindo ${nome}`

// console.log (boasVindas)

//EXERCICIO DE ESCRITA 2

// const comidasPreferidas = ["feijoada", "lasanha", "pure de batata", "cocada", "empada"]

// console.log (comidasPreferidas)

// console.log (comidasPreferidas[0])
// console.log (comidasPreferidas[1])
// console.log (comidasPreferidas[2])
// console.log (comidasPreferidas[3])
// console.log (comidasPreferidas[4])

// const comidaDoUsuario = prompt("Qual é a sua comida preferida?")
// comidasPreferidas[1] = comidaDoUsuario
// console.log(comidasPreferidas)

// EXERCICIO DE ESCRITA 3

// const listaDeTarefas = []
// const tarefaUm = prompt("Diga a primeira tarefa que você precisa realizar")
// const tarefaDois = prompt("Diga a segunda tarefa que você precisa realizar")
// const tarefaTres = prompt("Diga a terceira tarefa que você precisa realizar")

// listaDeTarefas.push(tarefaUm)
// listaDeTarefas.push(tarefaDois)
// listaDeTarefas.push(tarefaTres)

// console.log (listaDeTarefas)

// const tarefaCompleta =Number (prompt("Diga o numero de qual tarefa ja completou"))
// listaDeTarefas.splice(tarefaCompleta, 1)

// console.log (listaDeTarefas)

// DESAFIO 1

// const frase = prompt("Digite uma frase")
// const fraseArray = frase.split(' ')
// console.log (fraseArray)

// DESAFIO 2
const arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(`O indice do Abacaxi no array é o indice de numero ${arrayFrutas.indexOf("Abacaxi")} e o tamanho desse array é ${arrayFrutas.length}`)