function solucao(resultados) {

    let pontos = 0;

    for (let check of resultados) {
        if (check == "V") {
            pontos += 3
        } else if (check == "E") {
            pontos += 1
        } console.log(pontos)

    }
}

function processData(input) {
    const resultados = JSON.parse(input);
    solucao(resultados);
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