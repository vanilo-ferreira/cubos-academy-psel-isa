function solucao(velocidade, aceleracao, distanciaObjeto) {
    
       const distancia = (velocidade * -velocidade)/(2*aceleracao); 
      
      if (distancia === distanciaObjeto){
          console.log('NAO ACELERE'); 
      } else if (distanciaObjeto < distancia){
          console.log('COLISAO A FRENTE');
          } else {
              console.log('CAMINHO SEGURO');
          }
  }