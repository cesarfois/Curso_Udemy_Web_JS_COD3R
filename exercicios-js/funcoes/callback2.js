const notas = [9, 3, 4, 5, 6, 2, 8]

// sem callback
let notasbaixas = []

for (let i in notas){
    if (notas[i] < 7){
        notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas.sort())

// Com callback

notasbaixas = notas.filter(function(nota){
    return nota < 5
})

console.log(notasbaixas.sort())

const notasbaixas3 = notas.filter(nota => nota < 3)
console.log(notasbaixas3.sort())