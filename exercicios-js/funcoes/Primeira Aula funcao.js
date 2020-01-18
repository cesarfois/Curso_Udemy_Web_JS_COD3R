// Cidadao de primeira linha
// Função em JS First-Class Object (Citizens)
// Higher-order function

// Criar  de forma literal
// Toda funcao retorna alguma coisa senao definir retorna undefined

function fun1() { }

// podemos armazenar um funçao em uma variavel

const fun2 = function () { }

// Armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2 ]
console.log(array[0](2, 3))


// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como parametro

function run(fun){
    fun()
}

run(function(){ console.log('Executando..')})

// Uma funçao pode retornar/Conter uma funçao
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)