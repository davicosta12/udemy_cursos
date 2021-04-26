function removeDuplicatas(lista) {
    return new Set(lista);
  }
  
  
  var set = removeDuplicatas([1,1,2,2,3,3]);
  console.log(set);