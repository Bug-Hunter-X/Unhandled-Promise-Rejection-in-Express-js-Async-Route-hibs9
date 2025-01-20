const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(err => {
    console.error(err);
    res.status(500).send({ error: 'Internal Server Error' });
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Database error');
}