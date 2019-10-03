// percorrer um array, vai comparando os elementos no array 
// existe um elemento acumulador/resultado e depois compara ou faz a proxima com o elemento na sequencia.
// agregaçao num so valor.


const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // valor inicial 0

console.log(resultado)

