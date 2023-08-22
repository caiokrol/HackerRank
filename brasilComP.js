//function solucao(primeiraLetra, segundaLetra, palavras) {
//seu codigo aqui
const primeiraLetra = "a"
const segundaLetra = "v"

const palavras = [
    "bveia",
    "manha",
    "bve"
]
let i = 0;
let trueCheck = [];

for (let check of palavras) {
    if (check[0] == primeiraLetra && check[1] == segundaLetra) {
        trueCheck.push(palavras[i])
        console.log(palavras[i])
    } i += 1

} if (trueCheck.length == 0) {
    console.log(`NENHUMA`)
}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});