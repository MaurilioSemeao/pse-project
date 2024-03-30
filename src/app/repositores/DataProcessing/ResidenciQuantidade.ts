import { get } from 'http';
import { getData } from '../struct';

const dadosResidencia = getData('Qual sua cidade de residência?');

interface Residencia {
  cidade: Array<string>;
  quantidade: Array<number>;
}
const residencia: Residencia = { cidade: [], quantidade: [] };

dadosResidencia.forEach((item) => {
  if (residencia.cidade.length === 0) {
    residencia.cidade.push(String(item?.propis));
    residencia.quantidade.push(1);
  }
  if (!residencia.cidade.includes(String(item?.propis))) {
    residencia.cidade.push(String(item?.propis));
    residencia.quantidade.push(1);
  } else {
    const index = residencia.cidade.indexOf(String(item?.propis));
    residencia.quantidade[index] += 1;
  }
});

export default residencia;
