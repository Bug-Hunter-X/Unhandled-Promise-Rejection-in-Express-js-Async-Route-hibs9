# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Express.js applications:  unhandled promise rejections in asynchronous routes.  The provided `bug.js` file shows an Express.js route that performs an asynchronous operation. If an error occurs during this operation, the error is logged to the console, but no error response is sent to the client. The client will experience a silent failure.

The `bugSolution.js` file offers a solution to this problem by properly handling the rejection of the promise and sending an appropriate error response to the client.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `npm install express` to install the necessary dependencies.
4. Run `node bug.js`. The server will start listening on port 3000.
5. Send a request to `http://localhost:3000/` to trigger the asynchronous operation and the unhandled rejection. Observe that the error is logged to the console, but no error response is received from the server.
6. Repeat steps 3-5 with `bugSolution.js` to see how to properly handle the error.

## Solution

The solution involves adding error handling within the `.catch()` block of the promise.  Instead of simply logging the error, send an appropriate error response to the client using `res.status(errorCode).send({ error: errorMessage });`