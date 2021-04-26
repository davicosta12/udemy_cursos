// modelo1
const pontos = [
    [1,2],
    [3,4],
    [5,6]
  ];
  
  // modelo 2
  const pontos = [
    {x:1, y:2},
    {x:3, y:4},
    {x:5, y:6},
  ]

  function convertemodelo(pontos) {
      return pontos.map( ([ponto1, ponto2, ponto3]) => {
        ponto1 = {x:1, y:2}; 
        ponto2 = {x:3, y:4}; 
        ponto3 = {x:5, y:6}; 
        return ponto1, ponto2, ponto3;
      });
  }
  
  convertemodelo(pontos);