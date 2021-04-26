const status = [
    { codigo: 'OK', resposta: 'Sucesso' },
    { codigo: 'FAILED', resposta: 'Erro' },
    { codigo: 'PENDING', resposta: 'Pendente' }
  ];
  let mensagem = '';
  const codigoAtual = 'OK';
  
  for (let i = 0; i < status.length; i++) {
    if (status[i].codigo === codigoAtual) {
      mensagem = status[i].resposta;
    }
  }
  
  console.log(mensagem);