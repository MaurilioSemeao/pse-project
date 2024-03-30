import { getData } from '../struct';

const dataEstados = getData('Qual o estado do Brasil que você nasceu?');

interface Estado {
  nome: Array<string>;
  quantidade: Array<number>;
}

const estado: Estado = { nome: [], quantidade: [] };

dataEstados.forEach((item) => {
  if (estado.nome.length === 0) {
    estado.nome.push(String(item?.propis));
    estado.quantidade.push(1);
  }
  if (!estado.nome.includes(String(item?.propis))) {
    estado.nome.push(String(item?.propis));
    estado.quantidade.push(1);
  } else {
    const index = estado.nome.indexOf(String(item?.propis));
    estado.quantidade[index] += 1;
  }
});

export default estado;
