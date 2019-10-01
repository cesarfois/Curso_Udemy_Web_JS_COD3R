
Object.prototype.attr0 = 'Z' // nao utilizar ... pode impactar todos os objetos
const avo = { attr1 : 'A'}
const pai = { __proto__: avo, attr2 : 'B'}
const filho = { __proto__: pai, attr3 : 'C'}

console.log(filho.attr1) // como o filho nao tem atributo 1 vai buscar no pai e depois no avo e depois no object.prototype
console.log(filho.attr0)

// forma mais tradicional de assignar herança
Object.setPrototypeOf(pai, avo)
Object.setPrototypeOf(filho, pai)

