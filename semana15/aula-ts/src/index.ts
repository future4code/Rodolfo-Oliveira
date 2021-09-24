// const minhaString: string = "";
//o code me avisa que não pode ser atribuido um numero
// const meuNumero: number = 1;
//o code avisa que não pode ser atribuido
// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }
// enum corArcoIris {
//     VERMELHO = "vermelho",
//     LARANJA = "laranja",
//     AMARELO = "amarelo",
//     VERDE = "verde",
//     AZUL = "azul",
//     ANIL = "anil",
//     VIOLETA = "violeta"
// }

// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: corArcoIris
// }

// const maria: pessoa = {
//     nome: "maria",
//     idade: 19,
//     corFavorita: corArcoIris.VERDE
// }
// const rodolfo: pessoa = {
//     nome: "rodolfo",
//     idade: 30,
//     corFavorita: corArcoIris.AZUL
// }
// const josiane: pessoa = {
//     nome: "josiane",
//     idade: 17,
//     corFavorita: corArcoIris.VIOLETA
// }

// type numObjt = {
//     maior: number[],
//     menor: number[],
//     media: number
// }

// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a: number, b:number) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas: numObjt = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }
// const amostraDeIdades = {

//     numeros:  [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros:number[]) => {}
// }

// type objetoNumeros = {
//     numeros: number[],

// }

// const amostraDeIdades: objetoNumeros = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }

type postsModel = {
    autor: string,
    texto: string
}[];

const posts: postsModel = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]


function buscarPostsPorAutor(posts: postsModel , autorInformado: string) {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}