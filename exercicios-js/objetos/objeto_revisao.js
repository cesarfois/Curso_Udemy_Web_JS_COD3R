// coleçao dinamica de pares chaves/valor
const produto = new Object
produto.nome = 'Cadeira'  // formato recomendado
produto['marca do produto'] = 'Generica' // formato que posso utilzar nomes personalizados, mas restringido que so chamo desta maneira.
produto.preco = 220


console.log(produto)

delete produto.preco
console.log(produto)
console.log('===================================================================================')

const carro = {             // Objeto carro Atributos modelo, valor
    modelo: 'A5',
    valor: 89000,
    proprietario: {        // dentro carro obj proprietario com seus atributos
        nome: 'Raul',
        idade: 56,
        endereço:{
            logradouro: 'Rua ABC',   // dentro de carro.proprietario o obj endereço com seus atrib. logradouro
            numero: 123
        }
    },
    condutores:[{                   // array com condutores 02 neste caso
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        //...
    }
}

console.log(carro)
console.log('===================================================================================')

// Alterando atributos
carro.proprietario.endereço.numero = 3333
carro['proprietario']['endereço']['logradouro'] = 'AV GIGANTE' // Quando nao sei o atributo
console.log(carro.proprietario)
console.log('===================================================================================')

// Deletando valores
delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro // deletando a funçao
console.log(carro)

