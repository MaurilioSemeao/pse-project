import tabelaDados from '../../database/conexao';
import { getData } from '../struct';

const cursos = getData('Qual o período que cursa?');

interface Curso {
  nomeCurso: Array<string>;
  quantidade: Array<number>;
}
const curso: Curso = { nomeCurso: [], quantidade: [] };

cursos.forEach((item) => {
  if (curso.nomeCurso.length === 0) {
    curso.nomeCurso.push(String(item?.propis));
    curso.quantidade.push(1);
  }
  if (!curso.nomeCurso.includes(String(item?.propis))) {
    curso.nomeCurso.push(String(item?.propis));
    curso.quantidade.push(1);
  } else {
    const index = curso.nomeCurso.indexOf(String(item?.propis));
    curso.quantidade[index] += 1;
  }
});

export default curso;
