function* correBolt() {
    console.log(`Usain passou no Checkpoint 1`);
    yield 'checkpoint';
    console.log(`Usain passou no Checkpoint 2`);
    yield 'checkpoint';
    console.log(`Usain passou no Checkpoint 3`);
    yield 'checkpoint';
    console.log(`Usain passou no Checkpoint 4`);
    yield 'checkpoint';
  }
  
  const linha = correBolt();
  let next = linha.next(); console.log(next);
  next = linha.next(); console.log(next);
  next = linha.next(); console.log(next);
  next = linha.next(); console.log(next);
  next = linha.next(); console.log(next);