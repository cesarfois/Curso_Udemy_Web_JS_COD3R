
const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log('\n----------------------  Minha solucao -----------------------------------\n')

// desafio todos os alunos sao bolsistas?
// desafio2 algum aluno é bolsista?

const bolsistas = alunos.map( b => b.bolsista)

bolsistas.reduce(function(acumulador, atual){
    //console.log(acumulador, atual)
    todossao = acumulador && atual
    return todossao
})
console.log(todossao)

bolsistas.reduce(function(acumulador, atual){
    //console.log(acumulador, atual)
    unoe = acumulador || atual
    return unoe
})
console.log(unoe)

console.log('\n---------------------- professor soluçao -----------------------------\n')

const todosBolsitas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsitas))

console.log('\n---------------------- Minha soluçao -----------------------------\n')
// desafio2 algum aluno é bolsista?
const unobolsista = bolsistas.reduce((acum, atu)=>(acum || atu))
console.log(unobolsista)

console.log('\n---------------------- professor soluçao -----------------------------\n')

const algumbolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumbolsista))


 


/*

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // valor inicial 0

console.log(resultado)

*/