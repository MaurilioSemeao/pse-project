import { getData } from '../struct';

const dataFaixaSalarial = getData(
  'Qual a faixa de renda mensal da sua família (em Salários Mínimos)?',
);

interface IFaixa {
  nome: Array<string>;
  quantidade: Array<number>;
}

const faixaSalarial: IFaixa = { nome: [], quantidade: [] };

dataFaixaSalarial.forEach((item) => {
  if (faixaSalarial.nome.length === 0) {
    faixaSalarial.nome.push(String(item?.propis));
    faixaSalarial.quantidade.push(1);
  }
  if (!faixaSalarial.nome.includes(String(item?.propis))) {
    faixaSalarial.nome.push(String(item?.propis));
    faixaSalarial.quantidade.push(1);
  } else {
    const index = faixaSalarial.nome.indexOf(String(item?.propis));
    faixaSalarial.quantidade[index] += 1;
  }
});

export default faixaSalarial;
