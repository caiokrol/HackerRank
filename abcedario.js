//function solucao(letra, palavras) {

const letra = "m";
const palavras = ["aamao", "ca", "aelao", "aelancia", "laranja"]
let check = 0

for (let separate of palavras) {
    if (separate[0] !== letra) {
        check += 1
    }
} console.log(check)









function processData(input) {
    const { letra, palavras } = JSON.parse(input)[0];
    solucao(letra, palavras);
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