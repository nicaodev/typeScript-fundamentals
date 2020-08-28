//Padrão
var funcao_1 = function (numero) {
    return numero * 2;
}
console.log('Padrão: ', funcao_1(7));

// Sem o 'function. Com parênteses se tiver mais de 1 argumento.'
var funcao_2 = (numero) => {
    return numero * 2;
}
console.log('sem \'function\': ', funcao_2(8));

var funcao_3 = numero => {
    return numero * 2;
}
console.log('sem \'function\' e \'()\': ', funcao_3(9));

var funcao_4 = numero => numero * 2;
console.log('sem \'function\', \'()\' e \'return\' \': ', funcao_4(10));

var funcao_5 = () => 2 * 2;
console.log('sem parâmetros: ', funcao_5());