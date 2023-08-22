//function solucao(palpite, palavra) {
let palpite = 'a'
let palavra = "abelha"
let cont = 0;

for (let check of palavra) {
    if (check === palpite) {
        cont = cont + 1
    }
} console.log(cont)




function processData(input) {
    const [palpite, palavra] = input.split(" ");
    solucao(palpite, palavra);
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
