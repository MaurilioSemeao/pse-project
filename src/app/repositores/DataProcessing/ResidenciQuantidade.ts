import { get } from 'http';
import { getData } from '../struct';

const dadosResidencia = getData('Qual sua cidade de residência?');

interface Residencia {
  nome: Array<string>;
  quantidade: Array<number>;
}
const residencia: Residencia = { nome: [], quantidade: [] };

dadosResidencia.forEach((item) => {
  if (residencia.nome.length === 0) {
    residencia.nome.push(String(item?.propis));
    residencia.quantidade.push(1);
  }
  if (!residencia.nome.includes(String(item?.propis))) {
    residencia.nome.push(String(item?.propis));
    residencia.quantidade.push(1);
  } else {
    const index = residencia.nome.indexOf(String(item?.propis));
    residencia.quantidade[index] += 1;
  }
});

export default residencia;
