import { getData } from '../struct';

export const dadosGenero = getData('Qual o seu gênero?');

interface Genero {
  genero: Array<string>;
  quantidade: Array<number>;
}

const genero: Genero = { genero: [], quantidade: [] };

dadosGenero.forEach((item) => {
  if (genero.genero.length === 0) {
    genero.genero.push(String(item?.propis));
    genero.quantidade.push(1);
  }
  if (!genero.genero.includes(String(item?.propis))) {
    genero.genero.push(String(item?.propis));
    genero.quantidade.push(1);
  } else {
    const index = genero.genero.indexOf(String(item?.propis));
    genero.quantidade[index] += 1;
  }
});

export default genero;
