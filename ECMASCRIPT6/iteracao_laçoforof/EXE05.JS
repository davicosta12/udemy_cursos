function percorreRuas(lista,ruaPerigosa) {
    for(var item of lista) {
        if(item === ruaPerigosa) continue;
        console.log(item);
    }
}

percorreRuas(['Rua 1', 'Rua 2', 'Rua 3'], 'Rua 2');