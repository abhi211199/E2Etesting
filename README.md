# E2Etesting
The repository contains a basic ToDo app built upon ReactJS and ExpressJS with SQLite database to host the database. 
The prime purpose of the project is to understand the working of End to End testing tools like Cypress, understanding concepts like Instrumentation of Code, finding code touchpoints,
code coverage and generating corresponding code coverage reports for each components.

# Instructions to run the project
- Clone the project 
  ```
  git clone https://github.com/abhi211199/E2Etesting
  ```

## Steps to host the server
- Enter into the server directory
  ```
  cd E2Etesting/server
  ```
- Turn on the server
  ```
  npm run debug
  ```
  The server will be running in localhost:8080
  
## Steps to host the frontend app
- Enter into the server directory
  ```
  cd E2Etesting/todo
  ```
- Start the frontend server
  ```
  npm start
  ```
  
  # Instructions to test, instrument and find code coverage of the project
  
  ## Steps to instrument the frontend code
  - ```
    cd E2Etesting/todo
    npm run instrument
    ```
  By now, the code may be running in localhost:3000, using `window.__coverage__` in browser Developer tools console will fetch the instrumented code.
 ## Steps to find code coverage
 - Make sure that the Express server is running!
 - Open a new terminal. `npx run cypress` will open the Cypress dashboard contatining all the unit tests! The tests can be executed individually or in a sequence.
 - Once the tests are executed, the code coverage report can be found at `E2Etesting/todo/coverage/lcov-report/index.html`
 
 
 
 ## Steps to instrument the backend code
  - ```
    cd E2Etesting/server
    npx nyc instrument --compact=false index.js instrumented
    ```
  - The instrumented code can be found at `instrumented` folder.
 
 ## Steps to find code coverage
 - `npm start` This code will host the Express server along with `nyc` that is responsible for instrumenting the code using `istanbul.js` on the go.
 - Open a new terminal. `npx run cypress` will open the Cypress dashboard contatining all the unit tests! The tests can be executed individually or in a sequence.
 - Once the tests are executed, the code coverage report can be found at `E2Etesting/server/coverage/lcov-report/index.html`
