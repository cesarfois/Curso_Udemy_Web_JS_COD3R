// funcao autoinvocada - fuja do escopo global, faça tudo local 
// IIFE > Inmediately Invoked Function Expression

(function(){
    console.log('Sera executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()


