const pessoa = {
    nome : 'cesar',
    idade: 12,
    peso: 30,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})


console.log('==== utilizando destructuring =====')

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

console.log('\n==========================================\n')

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,  // pode ser listado?
    writable: true,     // pode ser escrita
    value: '01/01/2019' // valor padrao
})

pessoa.dataNascimento = '22/22/2222'
console.log(pessoa.dataNascimento)

console.log('\n===== Object.assign (ECMAScript 2015) =====\n')

const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)