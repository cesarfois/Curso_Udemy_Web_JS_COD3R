const valor = 'Global'


function minhaFuncao(){
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // Global carrega o contexto lexico onde foi definida