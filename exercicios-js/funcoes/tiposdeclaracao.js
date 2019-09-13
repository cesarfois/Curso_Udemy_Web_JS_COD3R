// function declaration (pode ser chamada antes da declaraçao)
function soma(x, y){
    return x + y
}


// function expression ( nao pode ser chamada antes da declaraçao )
const soma = function (x, y) {
    return x + y
}


// named function expression
const soma = function soma(x, y){
    return x + y
}