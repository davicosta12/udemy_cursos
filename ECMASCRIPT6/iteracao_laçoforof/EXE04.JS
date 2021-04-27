function percorreRuas(lista,ruaFinal) {
    for(var item of lista) {
        console.log(item);
        if(item === ruaFinal) break;
    }
}

percorreRuas(['Rua 1', 'Rua 2', 'Rua 3'], 'Rua 2');