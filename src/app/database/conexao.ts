import * as xlsx from 'xlsx';

class ExportadorJSON {
  getTableJons() {
    const file = __dirname + '/dbpse.xlsx';
    const wb = xlsx.readFile(file);
    const ws = wb.Sheets['Sheet1'];

    const data: Array<object> = xlsx.utils.sheet_to_json(ws);
    return data;
  }
}

const tabelaDados = new ExportadorJSON().getTableJons();
export default tabelaDados;
