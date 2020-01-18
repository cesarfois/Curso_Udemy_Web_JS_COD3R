

function parimpar(x){
    if (x % 2 == 0){
        return "ESTE NUMERO É PAR!"
    }
    else {
        return "ESTE NUMERO É IMPAR"
    }
}


imparpar = (y) => {
    if (y % 2 == 0){
        return "ESTE NUMERO É PAR!"
    }
    else {
        return (y + " = ESTE NUMERO É IMPAR" )
    }
}

res2 = imparpar(5)

console.log(res2)