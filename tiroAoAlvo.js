//function solucao(disparos) {
const points = []
const disparos = [0, 50, 50, 70, 40, 40, 40]
for (i = 0; i < disparos.length; i++) {
    if (disparos[i] >= 70) {
        points.push(disparos[i])
    }
} if (points.length >= 3) {
    console.log(points)
} else {
    console.log("ELIMINADO")
}

//}

function processData(input) {
    solucao(input.split(' ').map(x => Number(x)).filter(x => x));
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