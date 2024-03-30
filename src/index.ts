import app from './app';
import idadeData from './app/repositores/DataProcessing/IdadeData';

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});

console.log(idadeData);
