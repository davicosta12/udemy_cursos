function crialterador(lista) {
    var proximoIndex = -1;
    
    return {
        next: function(){
    
        if( proximoIndex < lista.length ) return { value: lista[++proximoIndex], done: false }
        else return { value: undefined, done: true }
        }
    };
}

crialterador([1,2]).next()
crialterador([1,2]).next()
crialterador([1,2]).next()