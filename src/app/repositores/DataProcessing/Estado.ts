import { getData } from '../struct';

const dataEstados = getData('Qual o estado do Brasil que você nasceu?');

interface Estado {
  estado: Array<string>;
  quantidade: Array<number>;
}

const estado: Estado = { estado: [], quantidade: [] };

dataEstados.forEach((item) => {
  if (estado.estado.length === 0) {
    estado.estado.push(String(item?.propis));
    estado.quantidade.push(1);
  }
  if (!estado.estado.includes(String(item?.propis))) {
    estado.estado.push(String(item?.propis));
    estado.quantidade.push(1);
  } else {
    const index = estado.estado.indexOf(String(item?.propis));
    estado.quantidade[index] += 1;
  }
});

export default estado;
