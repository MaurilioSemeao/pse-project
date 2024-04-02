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
  _18_20: PropsIdade;
  _21_30: PropsIdade;
  _31_40: PropsIdade;
  _41_: PropsIdade;
}
interface PropsIdade {
  name: string;
  amount: number;
}
export const ageRange: Idade = {
  _18_20: { name: '', amount: 0 },
  _21_30: { name: '', amount: 0 },
  _31_40: { name: '', amount: 0 },
  _41_: { name: '', amount: 0 },
};
dataNumber.forEach((item) => {
  if (item) {
    if (item.idade >= 18 && item.idade <= 20) {
      if (ageRange._18_20.amount === 0) {
        ageRange._18_20 = { name: '18-20', amount: 1 };
        return;
      }
      ageRange._18_20.amount += 1;
      return;
    }
    if (item.idade >= 21 && item.idade <= 30) {
      if (ageRange._21_30.amount === 0) {
        ageRange._21_30 = { name: '21-30', amount: 1 };
        return;
      }
      ageRange._21_30.amount += 1;
      return;
    }
    if (item.idade >= 31 && item.idade <= 40) {
      if (ageRange._31_40.amount === 0) {
        ageRange._31_40 = { name: '31-40', amount: 1 };
        return;
      }
      ageRange._31_40.amount += 1;
      return;
    }
    if (item.idade >= 41) {
      if (ageRange._41_.amount === 0) {
        ageRange._41_ = { name: '41+', amount: 1 };
        console.log(item.idade);
        return;
      }
      ageRange._41_.amount += 1;
      return;
    }
  }
});
