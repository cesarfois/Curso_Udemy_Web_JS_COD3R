let variavelon = false
console.log(variavelon)

variavelon = true
console.log(variavelon)
console.log(!!false) // !! testa se a variavel é falsa ou verdadeira.

// casos verdadeirosconsole.log('casos verdadeiros')

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Qualquer texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(variavelon = true))

// casos Falsos

console.log()
console.log('Os Casos falsos')
console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)
console.log(!!(variavelon = false))


// usos
console.log()
console.log('' || null || 'primeiro' || 'segunda')

console.log(1)
let nome = ''
console.log((nome || 'cesar'))

