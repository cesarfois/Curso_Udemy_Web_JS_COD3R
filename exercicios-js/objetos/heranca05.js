// Toda funcao tem o atribute prototype

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// posso fazer metodos personalizados.

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('CESAR'.reverse())
