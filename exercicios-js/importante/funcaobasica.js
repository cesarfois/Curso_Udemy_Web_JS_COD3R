
const alunos = [
    { nome: 'Cesar', nota: 9},
    { nome: 'Priscila', nota: 10}
]

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

console.log(soma(4,5))

// funcao numero randomico de 1 a 1000 com intervalo de
setInterval(() => console.log(_.random(1,1000)), 2000)