"use strict";
console.log("Hello World!");
var nome = "Rodolfo";
nome = 5;
nome = true;
console.log(nome);
var mustang = {
    marca: "Ford",
    volumeDoTanque: 61,
    temMotorFlex: false
};
var gol = {
    marca: "Volkswagen",
    volumeDoTanque: 50,
    temMotorFlex: true
};
var sandero = {
    marca: "Renault",
    volumeDoTanque: 45,
    temMotorFlex: true
};
var logan = {
    marca: "Renault",
    volumeDoTanque: 45,
    temMotorFlex: true
};
var garagem = [mustang, gol, sandero, logan];
console.log(garagem);
function buscarCarrosPorMarca(frota, marca) {
    if (marca === undefined) {
        return frota;
    }
    return frota.filter(function (carro) {
        return carro.marca === marca;
    });
}
var carrosRenault = buscarCarrosPorMarca(garagem, "Renault");
var carrosSemPassarMarca = buscarCarrosPorMarca(garagem);
console.log("Carros da renault:", carrosRenault);
console.log("Carros sem passar marca:", carrosSemPassarMarca);
//# sourceMappingURL=index.js.map