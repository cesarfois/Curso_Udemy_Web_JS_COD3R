// verifique o this e igual a module.exports
console.log(module.exports === this)
console.log(module.exports === exports)


// 3 formas de exportar ... que sao iguais.
this.a = 1
exports.b = 2
module.exports.c = 3

// mesmo que altere o exports, ele aponta para a mesma referencia de memoria
exports = null


console.log(module.exports)

// a forma certa de mudar o objeto exportado é esta.

module.exports = {
    publico: 'objeto exportado por mim'
}