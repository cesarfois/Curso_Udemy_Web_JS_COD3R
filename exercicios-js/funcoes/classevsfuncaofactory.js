// criando objetos por meio da classe 
// parece que com a funcao factory em js se comporta melhor no navegador.

class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

//=================================================

const criarPessoa = noem => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = new Pessoa('cesar')
p2.falar()
