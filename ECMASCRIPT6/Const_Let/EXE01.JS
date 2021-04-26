var arrayFuncoes = [];
var arrayLet = [];

for(var i = 0; i < 10; i++){
  arrayFuncoes.push(function(){
    console.log(i);
  });
}

for(let i = 0; i < 10; i++){
  arrayLet.push(function(){
    console.log(i);
  });
}

arrayFuncoes.forEach(function(funcao){
  funcao();
});

arrayLet.forEach(function(funcao){
  funcao();
});