

// function solucao(sequencia) {
//seu codigo aqui
const sequencia = ">>><>"
let position = 0;

for (let check of sequencia) {
    if (check == ">" && position < 6) {
        position += 1
    } else if (check == "<" && position > 0) {
        position -= 1
    } else if (check == "<" && position == 0) {
        position = 6
    } else if (check == ">" && position == 6) {
        position = 0
    }
}
console.log(position)

//}

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
