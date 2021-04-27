let a: [string, any, number] [] = [
  ['url', 'http://localhost', 54545],
  ['port', 8080, 599659]
];

const funcao = () => {
  a.forEach(el => {
    console.log(el[0])
  });
}

funcao();