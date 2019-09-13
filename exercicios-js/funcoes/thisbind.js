// criei um objeto chamado pessoa
// atributo saudaçao
// contendo uma funçao falar

const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas: undefined


const falar2 = pessoa.falar.bind(pessoa) // bind pega dentro do contexto
falar2()
