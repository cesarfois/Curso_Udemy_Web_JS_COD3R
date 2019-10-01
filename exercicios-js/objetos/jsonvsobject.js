// Json formato de dados textual

// criei um objeto
const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c}}
//convertendo um objeto em json
console.log(JSON.stringify(obj))

// convertendo um obj em json
// TODO TEM QUE SER EM APAS DUPLAS ""

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))