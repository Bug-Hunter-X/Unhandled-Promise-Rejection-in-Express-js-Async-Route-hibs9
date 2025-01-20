const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation (e.g., database query)
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(err => {
    console.error(err);
    // Missing error handling for the response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Simulate an error
  throw new Error('Database error');
}