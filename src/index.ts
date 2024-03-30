import app from './app';
import genero from './app/repositores/DataProcessing/Genero';

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});

console.log(genero);
