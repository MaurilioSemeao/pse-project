import tabelaDados from '../database/conexao';

interface Propis {
  propis: string;
}

interface itemDataPocessing {
  name: Array<string>;
  amount: Array<number>;
}

export function getData(colum: string) {
  const data = tabelaDados.map((item: { [key: string]: any }) => {
    if (typeof item === 'object' && item !== null && colum in item) {
      return { propis: String(item[colum]) };
    }
  });
  return data;
}

export const dataProcessing = (array: ({ propis: string } | undefined)[]) => {
  const itemDataPocessing: itemDataPocessing = { name: [], amount: [] };

  array.forEach((item) => {
    if (itemDataPocessing.name.length === 0) {
      itemDataPocessing.name.push(String(item?.propis));
      itemDataPocessing.amount.push(1);
    }
    if (!itemDataPocessing.name.includes(String(item?.propis))) {
      itemDataPocessing.name.push(String(item?.propis));
      itemDataPocessing.amount.push(1);
    } else {
      const index = itemDataPocessing.name.indexOf(String(item?.propis));
      itemDataPocessing.amount[index] += 1;
    }
  });
  return itemDataPocessing;
};
