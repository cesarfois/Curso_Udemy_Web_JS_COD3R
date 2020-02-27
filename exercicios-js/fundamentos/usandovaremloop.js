/* for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log('i=', i)
 */


// function mostrarvocais(){
//      let lista1 = ['a', 'e', 'i', 'o', 'u']
//      for (v in lista1){
//         console.log(lista1[v])
//      }
// }


// mostrarvocais()

let res = 0
function factorial(a){
    for (var i = a; i > 0; i--){
        res = res +( a * ( i -1 ))        
        console.log(i, res)
    }
}

factorial(4)



