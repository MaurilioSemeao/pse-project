import conexao from '../database/conexao';

const tabelaDados = conexao.getTableJons();

const residencias = tabelaDados.map((item) => {
  if (
    typeof item === 'object' &&
    item !== null &&
    'Qual sua cidade de residência?' in item
  ) {
    return { residencia: String(item['Qual sua cidade de residência?']) };
  }
});

interface Residencia {
  cidade: Array<string>;
  quantidade: Array<number>;
}
const residencia: Residencia = { cidade: [], quantidade: [] };

residencias.forEach((item) => {
  if (residencia.cidade.length === 0) {
    residencia.cidade.push(String(item?.residencia));
    residencia.quantidade.push(1);
  }
  if (!residencia.cidade.includes(String(item?.residencia))) {
    residencia.cidade.push(String(item?.residencia));
    residencia.quantidade.push(1);
  } else {
    const index = residencia.cidade.indexOf(String(item?.residencia));
    residencia.quantidade[index] += 1;
  }
});

export default residencia;
