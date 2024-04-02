import { ageRange } from './AgeRange';
import { dataProcessing, getData } from '../struct';

interface IProps {
  name: Array<string>;
  amount: Array<number>;
}

const dataResidence = getData('Qual sua cidade de residência?');
const residence: IProps = dataProcessing(dataResidence);

const dataPeriod = getData('Qual o período que cursa?');
const period: IProps = dataProcessing(dataPeriod);

export const dadosGender = getData('Qual o seu gênero?');
const gender: IProps = dataProcessing(dadosGender);

const dataStates = getData('Qual o estado do Brasil que você nasceu?');
const states: IProps = dataProcessing(dataStates);

const dataSalaryRange = getData(
  'Qual a faixa de renda mensal da sua família (em Salários Mínimos)?',
);
const salaryRange: IProps = dataProcessing(dataSalaryRange);

export default {
  residence,
  period,
  gender,
  states,
  salaryRange,
  ageRange,
};
