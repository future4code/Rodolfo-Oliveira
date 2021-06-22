// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("digite a altura"))
  const largura = Number(prompt("digite a largura")) 
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const ano = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number(prompt("Em que ano você nasceu?"))
  console.log(ano - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura*altura)
}
calculaIMC(peso,altura)
console.log(calculaIMC)
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome=prompt("qual o seu nome?")
  const idade=prompt("qual é a sua idade?")
  const email=prompt("qual é o seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1=prompt("Digite uma cor")
  const cor2=prompt("Digite uma cor")
  const cor3=prompt("Digite uma cor")
  const arrayCores=[cor1,cor2,cor3]
  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custoEspetaculo = custo / valorIngresso
  return custoEspetaculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const arrayString1 = string1.split()
  const arrayString2 = string2.split()
  const comparaStringArray = arrayString1 >= arrayString2
  return comparaStringArray

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 const primeiroItem = array[0]
 return primeiroItem

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimo = array.pop()
  return ultimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const indice1 = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = indice1;
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual =Number(prompt("Em que ano estamos?"))
  const dataNascimento =Number(prompt("em que ano você nasceu?"))
  const anoCarteira =Number(prompt("em que ano sua carteira foi emitida?"))
  const idade = anoAtual-dataNascimento
  const anoEmissao = anoAtual-anoCarteira
  const vinteOuMenos = idade <= 20 && anoEmissao >= 5
  const vinteACinquenta = idade > 20 && idade <= 50 && anoEmissao >= 10
  const cinquentaOuMais = idade > 50 && anoEmissao >=15
  const renovacao = vinteOuMenos || vinteACinquenta || cinquentaOuMais
  console.log (renovacao)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const bissexto1 = ano % 400 === 0
  const bissexto2 = ano % 4 ===0 && !(ano % 100 ===0 && !bissexto1)
  return bissexto1 || bissexto2

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você é maior de idade?")
  const escolaridade = prompt("você possui o ensino medio completo?")
  const disponibilidade = prompt("você possui disponibilidade?")
  const idadeBol = (idade === "sim")
  const escolaridadeBol = (escolaridade === "sim")
  const disponibilidadeBol = (disponibilidade === "sim")
  const apto = idadeBol && escolaridadeBol && disponibilidadeBol
  console.log (apto)
}