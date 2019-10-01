// Tecnicas para encapsulamento 
// validaçao de dados

const sequencia = {
    _valor: 1, // convençao
    get valor() {return this._valor++ },
    set valor(valor){               // verifica se o valor sobe
        if(valor > this._valor){
            this._valor =  valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900             // ignora este valor por ser mais baixo.
console.log(sequencia.valor, sequencia.valor)
