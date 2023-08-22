const precos = [1, 5, 10, 20]

let menor = Infinity;
let pagar = 0;

if (precos.length >= 5) {
    for (i = 0; i < precos.length; i++) {
        pagar += precos[i]
        if (precos[i] < menor) {
            menor = precos[i]
        }
    } for (let check of precos) {
        if (check === menor) {
            pagar -= check
            break
        }
    }
} else {
    for (let check of precos)
        pagar += check
} console.log(pagar)