//Exercicios de interpretação de codigo:
//Exercicio 1
// const bool1 = true 
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) //false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado)  // false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) //true

// console.log("d. ", typeof resultado) //boolean

//Exercicio 2

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)  //Será impresso um numero seguido do outro porque ele está somando as linhas do tipo string

// Uma solução seria adicionar um conversor para do tipo number no codigo, ficando:
// let primeiroNumero = Number (prompt ("Digite um numero!"))
// let segundoNumero = Number (prompt ("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma) 

// exercicios de escrita de codigo:
//Exercicio 1:

// let idade =Number (prompt ("Qual a sua idade?"))
// let idadeAmigo =Number (prompt ("Qual a idade do seu melhor amigo?"))

// console.log ("A sua idade é maior do que a do seu amigo?", idade >= idadeAmigo)
// console.log ("A diferença de idade de vocês é:", idade - idadeAmigo)

// Exercicio 2

// let numero = Number (prompt ("Por favor, insira um numero par"))
// let numeroDividido = Number (numero / 2)

// console.log ("O resultado é:", numeroDividido) //O resultado é sempre numeros inteiros.
//Se você usa um numero impar, ele imprime com casas decimais.

// Exercicio 3

// let idade = Number (prompt ("Qual a sua idade?"))
// let idadeDias = Number (idade * 365)
// let idadeHoras = Number (idadeDias * 24)

// console.log ("Você tem", idade, "anos")
// console.log ("Você tem", idadeDias, "dias")
// console.log ("Você tem", idadeHoras, "horas")

//Exercicio 4


let numero = Number (prompt ("Por favor, insira um numero"))
let numeroDois = Number (prompt ("Por favor, insira um numero diferente do anterior"))


console.log ("O primeiro numero é maior que segundo?", numero >= numeroDois )
console.log ("O primeiro numero é igual ao segundo?", numero == numeroDois)
console.log ("O primeiro numero é divisível pelo segundo?", numero % numeroDois === 0)
console.log ("O segundo numero é divisível pelo primeiro?", numeroDois % numero === 0)

//Desafio 1
// A:
// let farenheit = Number (77)
// let kelvin = Number (farenheit - 32)*(5/9) + 273.15

// console.log (farenheit, "F equivalem a", kelvin, "em K")

//B:

// let celsius = Number (80)
// let farenheit = Number (celsius)*(9/5) + 32

// console.log (celsius, "graus celsius equivalen a", farenheit, "graus farenheit")

//C:

// let celsius = Number (30)
// let farenheit = Number (celsius)*(9/5) + 32
// let kelvin = Number (farenheit - 32)*(5/9) + 273.15

// console.log (celsius," Graus celsius são equivalentes a", farenheit, "graus farenheit e", kelvin, "Graus Kelvin.")

//D:

// let celsius = Number (prompt("Insira o valor desejado:"))
// let farenheit = Number (celsius)*(9/5) + 32
// let kelvin = Number (farenheit - 32)*(5/9) + 273.15

// console.log (celsius," Graus celsius são equivalentes a", farenheit, "graus farenheit e", kelvin, "Graus Kelvin.")

// Desafio 2 A:
// let killowat = Number (280)
// const custo = 0.05
// let valorFinal = (killowat*custo)

// console.log ("O valor a se pagar é de R$", valorFinal)

//Desafio 2 B:

// let killowat = Number (280)
// const custo = 0.05
// let valorFinal = (killowat*custo)
// let desconto =Number (valorFinal / 100 * 15)
// let valorDesconto = valorFinal - desconto

// console.log ("O valor a se pagar é de R$", valorDesconto)

//Desafio 3:
//A:
// let libras = Number (201)
// let kilo = Number (libras*0.454)

// console.log (libras, "Lb equivalem a ", kilo, "kg.")

//B:
// let onca =Number (10.5)
// let kilo =Number (onca*0.03)

// console.log (onca, "onças equivalem a ", kilo, "kilos.")

//C:
// let milhas =Number (100)
// let metros =Number (milhas/0.00062137)

// console.log (milhas, "milhas equivalem a ", metros,"metros.")

//D:
// let pes =Number (50)
// let metro =Number (pes*3.2808)

// console.log (pes,"ft equivalem a ", metro, "metros.")

//E:
// let galao =Number (103.56)
// let litro =Number (galao*0.26417)

// console.log (galao, "gal equivalem a ", litro, "litros.")

//D:

// let milhas =Number (prompt("Digite quantas milhas deseja converter:"))
// let metros =Number (milhas/0.00062137)

// console.log (milhas, "milhas equivalem a", metros,"metros.")


