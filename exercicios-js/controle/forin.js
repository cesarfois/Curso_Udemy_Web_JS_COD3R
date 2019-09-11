const notas = [8, 9, 3, 2, 1]


for (i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}