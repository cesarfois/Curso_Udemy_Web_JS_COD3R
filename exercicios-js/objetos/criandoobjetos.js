// usando a notaçao literal

const obj1 = {}   // criaçao literal de um objeto FORMA 01
console.log(obj1)

// Object em JS
const obj2 = new Object // criaçao utilizando a funçao construtora. "NEW" FORMA 02
console.log(obj2)

// funçoes construtoras | ENCAPSULAMENTO     FORMA 03
function Produto(nome, preco, desc){  // preco e desconto ficam nao acessiveis. (privado)
    this.nome = nome                  // com o comando THIS, nome fica acessivel. (publico)
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99 , 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao Factory - Padrao de projeto   | FORMA 04

function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas) // funcao calculo salario faltas
        }
    }    
}

const f1 = criarFuncionario('cesar', 7980, 4)
const f2 = criarFuncionario('Javier', 11400, 1)
console.log(f1.nome,f2.nome)
console.log(f1.getSalario(), f2.getSalario())

// Object.create     FORMA 05
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Uma funçao famosa que retorna Objeto... FORMA 06
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)