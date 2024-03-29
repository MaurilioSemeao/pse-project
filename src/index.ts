import express from 'express';
import xlsx from 'xlsx';

const file = __dirname + '/dbpse.xlsx';
const app = express();
const port = 3000;

const wb = xlsx.readFile(file);
const ws = wb.Sheets['Sheet1'];
const data: Array<object> = xlsx.utils.sheet_to_json(ws);

interface resid {
  residencia: string;
}
const residencias = data.map((item) => {
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
const contCidades: Residencia = { cidade: [], quantidade: [] };

residencias.forEach((item) => {
  if (contCidades.cidade.length === 0) {
    contCidades.cidade.push(String(item?.residencia));
    contCidades.quantidade.push(1);
  }
  if (!contCidades.cidade.includes(String(item?.residencia))) {
    contCidades.cidade.push(String(item?.residencia));
    contCidades.quantidade.push(1);
  } else {
    const index = contCidades.cidade.indexOf(String(item?.residencia));
    contCidades.quantidade[index] += 1;
    console.log(contCidades.quantidade[index]);
  }
});

console.log(contCidades);
