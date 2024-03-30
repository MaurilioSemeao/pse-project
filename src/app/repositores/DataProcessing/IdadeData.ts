import tabelaDados from '../../database/conexao';
import xlsx from 'xlsx';
import { getData } from '../struct';

const dataValue = getData('Qual a sua data de nascimento?');

const dataNumber = dataValue.map((item) => {
  if (item) {
    const date = xlsx.SSF.parse_date_code(item.propis);
    const datefull = new Date(date.y, date.m, date.d, date.H, date.M, date.S);
    const hoje = new Date();
    return { idade: hoje.getFullYear() - datefull.getFullYear() };
  }
});
interface Idade {
  _18_20: Array<PropsIdade>;
  _21_30: Array<PropsIdade>;
  _31_40: Array<PropsIdade>;
  _41_: Array<PropsIdade>;
}
interface PropsIdade {
  nome: string;
  quantidade: number;
}
const faixaEtaria: Idade = { _18_20: [], _21_30: [], _31_40: [], _41_: [] };
dataNumber.forEach((item) => {
  if (item) {
    if (item.idade === 18 && item.idade <= 20) {
      if (faixaEtaria._18_20.length === 0) {
        faixaEtaria._18_20.push({ nome: '18-20', quantidade: 1 });
      }
      faixaEtaria._18_20[0].quantidade += 1;
    }
    if (item.idade >= 21 && item.idade <= 30) {
      if (faixaEtaria._21_30.length === 0) {
        faixaEtaria._21_30.push({ nome: '21-30', quantidade: 1 });
      }
      faixaEtaria._21_30[0].quantidade += 1;
    }
    if (item.idade >= 31 && item.idade <= 40) {
      if (faixaEtaria._31_40.length === 0) {
        faixaEtaria._31_40.push({ nome: '31-40', quantidade: 1 });
      }
      faixaEtaria._31_40[0].quantidade += 1;
    }
    if (item.idade >= 41) {
      if (faixaEtaria._41_.length === 0) {
        faixaEtaria._41_.push({ nome: '41+', quantidade: 1 });
      }
      faixaEtaria._41_[0].quantidade += 1;
    }
  }
});

//faixaEtaria.quantidade[faixaEtaria.nome.indexOf(String(faixaEtaria.nome))] += 1;

export default faixaEtaria;
