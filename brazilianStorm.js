const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]

let maior = -Infinity
let menor = Infinity
let soma = 0

for (let check of notas) {
    if (check < menor) {
        menor = check
    }
    if (check > maior) {
        maior = check
    } soma += check
}
console.log((soma - maior - menor) / (notas.length - 2))