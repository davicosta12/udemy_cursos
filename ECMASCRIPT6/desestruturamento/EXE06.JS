const corpoDocente = [
    [ 'Gramática', '9:00', 'Sueli' ],
    [ 'Matemática', '10:15', 'Amilton'],
    [ 'Educação Física', '11:30', 'Bruno' ]
  ];
  
  function mostraGradeProfessores(corpoDocente) {
    return corpoDocente.forEach( ([materia, hora, nome]) => {
      console.log(`Aula de ${materia} às ${hora} com professor(a) ${nome}`);
    });
  }
  
  mostraGradeProfessores(corpoDocente);