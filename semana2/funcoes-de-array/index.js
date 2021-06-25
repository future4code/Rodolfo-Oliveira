//EXERCICIOS DE LEITURA
//1 Leia o código abaixo

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
// })

//Ele ira retornar todos os items de cada indice, o numero do indice e o 
//array inteiro.
//2 Leia o código abaixo

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB)


// ele ira imprimir um array com somente o item nome de cada indice.

//3 Leia o código abaixo:

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)
//ele vai retornar e imprimir os objetos no array exceto o que 
//contem o apelido Chijo

//EXERCICIOS DE ESCRITA
//1 Dado o seguinte array de cachorrinhos que são clientes de um
// pet shop, realize as operações pedidas nos itens abaixo utilizando 
// as funções de array map e filter:

// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]
// a) Crie um novo array que contenha apenas o nome dos doguinhos
// novoArrayNomes = pets.map((item, index, array) => {
//   return item.nome
// })
// console.log (novoArrayNomes)

//B) Crie um novo array apenas com os cachorros salsicha

// novoArraySalsicha = pets.filter((item, index, array) => {
//   return (item.raca === "Salsicha")
// })
// console.log (novoArraySalsicha)

//c) Crie um novo array que possuirá mensagens para enviar 
//para todos os clientes que são poodles. A mensagem deve ser: 
//"Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// arrayPoodleDesconto = pets.filter((titiu) => titiu.raca ==="Poodle").map((titiu) => {
//   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${titiu.nome}`})

// console.log (arrayPoodleDesconto)

//2 Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
//utilizando as funções de array map e filter:
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a) Crie um novo array que contenha apenas o nome de cada item
// produtosNovo = produtos.filter((produto) => produto.nome).map((produto)=>{
//   return produto.nome
// })
// console.log (produtosNovo)
//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const produtosDesconto = produtos.map((produto) => {
  const produtoFinal = {...produto};
  produtoFinal.preco = produtoFinal.preco * 0.95;

  return (produtoFinal);
})
console.log (produtosDesconto) 
//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"