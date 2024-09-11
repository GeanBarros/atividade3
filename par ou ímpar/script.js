function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log('${numero} é par.');
    } else {
        console.log('${numero} é ímpar.');
    }
}

const numero = 9;

verificarParOuImpar(numero);