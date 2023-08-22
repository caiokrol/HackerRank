//function solucao(precos) {

const precos = [30, 10, 54, 76, 1, 7, 35]
let menor = precos[0];

for (i = 0; i < precos.length; i++) {
    for (h = i + 1; h < precos.length; h++)
        if ((precos[i] - precos[h]) < menor && (precos[i] - precos[h]) > 0) {
            menor = precos[i] - precos[h]
        }
} console.log(menor)



/*



// }

function processData(input) {
    const precos = input.split(" ").map(x => parseInt(x));
    solucao(precos);
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

*/