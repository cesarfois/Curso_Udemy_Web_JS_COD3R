function tratarErroeLancar(erro) {
    //throw new error('a funcao deu um erro que nao pode ser tratado')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try {
    console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e){
        tratarErroeLancar(e)
    } finally {
        console.log('chegou ao fim')
    }


}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)