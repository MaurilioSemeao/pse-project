import { getData } from '../struct';

export const dadosGenero = getData('Qual o seu gênero?');

interface Genero {
  nome: Array<string>;
  quantidade: Array<number>;
}

const genero: Genero = { nome: [], quantidade: [] };

dadosGenero.forEach((item) => {
  if (genero.nome.length === 0) {
    genero.nome.push(String(item?.propis));
    genero.quantidade.push(1);
  }
  if (!genero.nome.includes(String(item?.propis))) {
    genero.nome.push(String(item?.propis));
    genero.quantidade.push(1);
  } else {
    const index = genero.nome.indexOf(String(item?.propis));
    genero.quantidade[index] += 1;
  }
});

export default genero;
