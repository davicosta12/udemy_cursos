function montaEnderecoCompleto(rua, cidade, numero, cep) {
    return `${rua},  ${cidade}, ${numero}, ${cep}.`;
}

montaEnderecoCompleto('Visconde de Jaguari', 'São Paulo', 254, 02215000);