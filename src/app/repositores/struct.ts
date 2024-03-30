import tabelaDados from '../database/conexao';

export function getData(colum: string) {
  const data = tabelaDados.map((item: { [key: string]: any }) => {
    if (typeof item === 'object' && item !== null && colum in item) {
      return { propis: String(item[colum]) };
    }
  });

  return data;
}
