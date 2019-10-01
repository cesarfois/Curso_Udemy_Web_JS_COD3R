a = 1
b = 2
c = 3

const obj1 = { a: a, b: b, c: c} // notaçao antiga
const obj2 = {a, b, c} // nova notaçao
console.log(obj1)
console.log(obj2)

console.log('\nobj3 ==============================================\n')

const nomeAttr = 'nota'
const valorAttr = 8

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

console.log('\nobj4 ===============================================\n')

const obj4 = {[nomeAttr]: [valorAttr]}
console.log(obj4)

console.log('\nobj5 ===============================================\n')

const obj5 = {
    funcao1: function () {
        //forma antiga
    },
    funcao2(){
        //forma nova
    }
}

console.log(obj5)