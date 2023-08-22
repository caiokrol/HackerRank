

function solucao(stringCorrompida) {
    let caracteres = ["!", "@", "#", "$", "%", "&", "*", "(", ")"]
    let purificado = []

    for (i = 0; i < stringCorrompida.length; i++) {
        if (stringCorrompida[i] !== caracteres[0] && stringCorrompida[i] !== caracteres[1] && stringCorrompida[i] !== caracteres[2] && stringCorrompida[i] !== caracteres[3] && stringCorrompida[i] !== caracteres[4] && stringCorrompida[i] !== caracteres[5] && stringCorrompida[i] !== caracteres[6] && stringCorrompida[i] !== caracteres[7] && stringCorrompida[i] !== caracteres[8]) {
            purificado += stringCorrompida[i]
        }

    } console.log(purificado)

}


function processData(input) {
    solucao(input);
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