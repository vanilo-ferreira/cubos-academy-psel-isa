function solucao(palpite, palavra) {
    
    let separarPalavra = palavra.split("");
    let contador = 0;
    for (let letra of separarPalavra){
        if (palpite === letra){
            contador++;
        }
    }
    console.log(contador);
    
  
}