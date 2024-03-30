import tabelaDados from '../../database/conexao';
import { getData } from '../struct';

const dataPeriodo = getData('Qual o período que cursa?');

interface Periodo {
  periodo: Array<string>;
  quantidade: Array<number>;
}
const periodos: Periodo = { periodo: [], quantidade: [] };

dataPeriodo.forEach((item) => {
  if (periodos.periodo.length === 0) {
    periodos.periodo.push(String(item?.propis));
    periodos.quantidade.push(1);
  }
  if (!periodos.periodo.includes(String(item?.propis))) {
    periodos.periodo.push(String(item?.propis));
    periodos.quantidade.push(1);
  } else {
    const index = periodos.periodo.indexOf(String(item?.propis));
    periodos.quantidade[index] += 1;
  }
});

export default periodos;
