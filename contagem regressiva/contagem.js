function contagemRegressiva(tempo) {
    let contador = tempo;

    const intervalo = setInterval(() => {
       console.log(contador);
       contador--;

        if (contador < 0) {
            clearInterval(intervalo);
            console.log("Contagem regressiva finalizada!");
        }
    }, 1000);
}

contagemRegressiva(5);