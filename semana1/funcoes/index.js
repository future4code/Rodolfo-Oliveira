// EXERCICIO DE LEITURA 1 ----------------------------------------------------------------------------------------------------------------------
// A: 10
// B: 50
// EXERCICIO DE LEITURA 2 ----------------------------------------------------------------------------------------------------------------------
//A:
//Essa função tem por finalidade checar se existe a palavra "cenoura" dentro da string e também alterar todo o texto para caixa baixa.
//B:
//i: 
//   True
//   eu gosto de cenoura
//ii:
//   true
//   cenoura é bom pra vista
//iii:
//   true
//   cenouras crescem na terra

// EXERCICIOS DE ESCRITA 1
// A:
// function personalInfo() {
//     const nome=("Rodolfo Dornelas")
//     const idade=Number (29)
//     const cidade=("São Joaquim de bicas")
//     const profissao=("estudante")
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }

// personalInfo()

//B:

// function personalInfo(nome, idade, cidade, profissao) {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }
// personalInfo("Rodolfo", 29, "São joaquim de bicas", "estudante")

// EXERCICIO DE ESCRITA 2
// A:

// function somaNumeros(numeroUm, numeroDois){
//     const soma = numeroUm + numeroDois
//     return soma
// }
// console.log (somaNumeros(25, 30))

//B:
// function somaNumeros(numeroUm, numeroDois){
//     const comparacao= numeroUm >= numeroDois
//     return comparacao
// }
// console.log (somaNumeros(25, 25))

//C:
// function somaNumeros(numeroUm){
//     const comparacao= numeroUm % 2 === 0;
//     return comparacao;
// }
// console.log (somaNumeros(2));

//D:
// function fraseExercicio(mensagem){
//     console.log (`O tamanho da frase "${mensagem}" é de ${mensagem.split(" ").length} palavras, e em caixa alta ela fica: ${mensagem.toUpperCase(String)}`)
// };
// fraseExercicio("este é um teste pelo amor de deus.");   

//EXERCICIO DE ESCRITA 3:

// function operacoesBasicas(numeroUm, numeroDois){
//     const adicao=numeroUm + numeroDois;
//     const subtracao=numeroUm - numeroDois;
//     const divisao=numeroUm / numeroDois;
//     const multiplicacao=numeroUm * numeroDois;
//     console.log (`os resultados sao:
//     soma=${adicao}
//     subração=${subtracao}
//     divisão=${divisao}
//     multiplicação=${multiplicacao}`);
// };

// operacoesBasicas(Number(prompt("Digite um numero")),Number(prompt("Digite outro numero")))

//DESAFIO 1:
//A:
const funcaoReceptora = (parametro) => {
    console.log(parametro);
};


//B:

const funcaoDeSoma = (primeiroParametro, segundoParametro) => {
    const soma = primeiroParametro + segundoParametro;
    funcaoReceptora(soma);
};

funcaoDeSoma(5,10);