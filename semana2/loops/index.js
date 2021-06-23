// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?  
    // let valor = 0
    // for(let i = 0; i < 5; i++) {
    //   valor += i
    // }
    // console.log(valor)

    // o codigo ira rodar enquanto [i] for menor do que 5, acrescentando mais 1 a [1] para cada loop e depois somando [i] com [valor], até que [i] não seja mais menor do que 5.

    // 2. Leia o código abaixo:

    
    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // for (let numero of lista) {
    //   if (numero > 18) {
    // 		console.log(numero)
    // 	}
    
    // a) O que vai ser impresso no console?
    //     todos os numeros maiores que 18
    // b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
    //     sim. criando uma variavel para armazenar a length do array e depois usando ela com o for-of

// 3 Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// 4 linhas com 4 asteriscos. / o correto seria 4 linhas com um, dois, tres e quatro asteriscos respectivamente.


// EXERCICIO 1:

// const bichinhosUsuario =Number(prompt("Quantos bichinhos você tem?"))
// if (bichinhosUsuario === 0){
//     console.log ("Que pena! Você pode adotar um pet!")
// }else if(bichinhosUsuario > 0){
//     let bichinhosQuantidade = [];
//     while (bichinhosQuantidade.length < bichinhosUsuario){
//         bichinhosQuantidade.push(prompt("Digite o nome de cada um deles"))
       
//     }
//     console.log (bichinhosQuantidade)
// }

// 2: Considere que você tenha acesso a um array  (chamado de 'array original') que é 
// composto somente de números. Baseando-se nisso, crie uma função para cada um dos 
// itens abaixo, realizando as operações pedidas:

// a) Escreva um programa que **imprime** cada um dos valores do array original.

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
//a
const arrayOriginal = [1, 2, 3, 4, 5]
const tamanho = arrayOriginal.length
for (let i = 0; i < tamanho; i++){
    console.log (arrayOriginal[i])
}
//B
for (let i = 0; i < tamanho; i++){
    console.log (arrayOriginal[i]/10)
}
//C
const novoArray = []
for (let i = 0; i<tamanho; i++){
    if(arrayOriginal[i]%2 ===0){
        novoArray.push(arrayOriginal[i]) 
    }
}
console.log (novoArray)
//D
const arrayStrings = []
