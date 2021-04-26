const contatos = [
    {
      nome: 'Mario Antonio',
      numero: '1234-5678'
    },
    {
      nome: 'Reinalda Silva',
      numero: '1234-6789'
    },
    {
      nome: 'Bárbara Lopes',
      numero: '1234-5567'
    }
  ];
  
  const [,cont2] = contatos;
  console.log(cont2);
  
  function mostraDados({nome, numero}) {
      console.log(nome);
      console.log(numero);
  }
  
  mostraDados(cont2);