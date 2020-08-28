var escopo = 'escopo_global';

const constante = '\'const\' Não muda o valor ao longo do script.';

if (1) {
  let escopo = 'escopo_local';
  console.log('\'Let\' assume escopo de onde estiver: ', escopo);
}

console.log('\'var\' assume escopo global. Elevação do escopo: ', escopo);
console.log(constante);
