import conexao from '../database/conexao';

const tabelaDados = conexao.getTableJons();

const cursos = tabelaDados.map((item) => {
  if (
    typeof item === 'object' &&
    item !== null &&
    'Qual o período que cursa?' in item
  ) {
    return { curso: String(item['Qual o período que cursa?']) };
  }
});

interface Curso {
  nomeCurso: Array<string>;
  quantidade: Array<number>;
}
const curso: Curso = { nomeCurso: [], quantidade: [] };

cursos.forEach((item) => {
  if (curso.nomeCurso.length === 0) {
    curso.nomeCurso.push(String(item?.curso));
    curso.quantidade.push(1);
  }
  if (!curso.nomeCurso.includes(String(item?.curso))) {
    curso.nomeCurso.push(String(item?.curso));
    curso.quantidade.push(1);
  } else {
    const index = curso.nomeCurso.indexOf(String(item?.curso));
    curso.quantidade[index] += 1;
  }
});

export default curso;
