console.log(Math.ceil(6.1))


const obj1 = {}
obj1.nome = 'Atributo1' // obj1['nome' = 'bola1'] é o mesmo

// funcao para criar atributos enviados por parametro
function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(Obj1.nome)
console.log(obj2.nome)
console.log(obj3.nome)
