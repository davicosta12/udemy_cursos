// desenvolva aqui seus códigos para os exercícios
import nome from './src/config';
import {chave} from './src/config';
import Telefone from './src/classe';
import {url as link} from './src/config';
import printNoConsole from './src/printer'


console.log(nome);
console.log(chave);

const telefone = new Telefone('Galaxy S8', 11957587125);
console.log(`modelo: ${telefone.modelo} | número: ${telefone.numero}`);
console.log(link);

printNoConsole('Davizera');