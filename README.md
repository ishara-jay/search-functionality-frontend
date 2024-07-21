# Search Functionality Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) as an assignment.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Setting up environmental variables

Add .env file to the root directory as per the following template

    REACT_APP_BASE_URL=

    REACT_APP_SUGGESTION_ENDPOINT=
    REACT_APP_QUERY_ENDPOINT=

For development purposes, following environmental variables can be utilised.

    REACT_APP_BASE_URL=https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw

    REACT_APP_SUGGESTION_ENDPOINT=e026dab444155edf2f52122aefbb80347c68de86/suggestion.json
    REACT_APP_QUERY_ENDPOINT=44deafab00fc808ed7fa0e59a8bc959d255b9785/queryResult.json

## Containerisation

This app has been containerised using docker for deployment purposes. Run below command to create the docker image

    docker build -t search-functionality-frontend .

and then run below command to run the docker image.

    docker run -p <your choice of port>:80 search-functionality-frontend

