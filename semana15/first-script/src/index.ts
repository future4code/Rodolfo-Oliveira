// console.log("Hello World!")

// let nome: string | number | boolean = "Rodolfo";
// nome = 5;
// nome = true;
// console.log(nome);

// //exercicio 3

// type carro = {
//     marca: string,
//     volumeDoTanque: number,
//     temMotorFlex?: boolean
// }

// const mustang: carro = {
//     marca: "Ford",
//     volumeDoTanque: 61,
//     temMotorFlex: false
// }

// const gol: carro = {
//     marca: "Volkswagen",
//     volumeDoTanque: 50,
//     temMotorFlex: true
// }

// const sandero: carro = {
//     marca: "Renault",
//     volumeDoTanque: 45,
//     temMotorFlex: true
// }

// const logan: carro = {
//     marca: "Renault",
//     volumeDoTanque: 45,
//     temMotorFlex: true
// }

//array de objetos que guarda carros

// const garagem: carro[] = [mustang, gol, sandero, logan]
// console.log(garagem)

// function buscarCarrosPorMarca(frota: carro[], marca?: string): carro[] {
//     if (marca === undefined) {
//         return frota
//     }
//     return frota.filter((carro) => {
//         return carro.marca === marca
//     })
// }

// const carrosRenault = buscarCarrosPorMarca(garagem, "Renault")
// const carrosSemPassarMarca = buscarCarrosPorMarca(garagem)

// console.log("Carros da renault:", carrosRenault)
// console.log("Carros sem passar marca:", carrosSemPassarMarca)

enum marca {
    RENAULT = "Renault",
    VW = "Volkswagen",
    FORD = "Ford",
    PEUGEOT = "Peugeot"
}

