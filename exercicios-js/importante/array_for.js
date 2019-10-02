
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

for (let i = 0 ; i < aprovados.length; i++){
    console.log(i, aprovados[i])
}

console.log('\n===================== for in ===========================\n')

for (i in aprovados) {
    console.log(i, aprovados[i])
}