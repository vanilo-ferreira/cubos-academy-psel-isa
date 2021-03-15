function solucao(jogadas) {
    
      let grupo1 = 0;
      let grupo2 = 0; 
      
      for (let i of jogadas){
          if (i === 1){
              grupo1++; 
          }else {
              grupo2++;
          }
  } 
      if (grupo1 === grupo2){
          console.log('true');
      } else{
          console.log('false');
      }
  }