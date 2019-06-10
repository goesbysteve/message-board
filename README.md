# Message Board

The result of a tech test. See below for install and scripts

## Outcome

- This is a really basic conceptual message board. aka it's a CRUD implementation. Most of my time was in learning beyond my basic React skill. Although I can argue why I've chosen the approach, I fully expect to learn more in the code review.

- I had intended to refactor for Redux but didn't for two reasons; 1. that's probably more complicated than this needs 2. I didn't have time!

- I used Firebase because I wanted to show some sync between users but didn't get that far. Was interesting when it came to [mocking it](https://github.com/stevegibbings/message-board/blob/master/src/__mocks__/firebase.js) for testing.

- I intended to show reuse pattern of HoC ( WithAuthentication, PrivateRoute ), use of hooks to allow components with ui state ( the post forms ) to be functional components.

- Not all tests are complete. See 

  - [App.test.js#L60](https://github.com/stevegibbings/message-board/blob/master/src/components/App.test.js#L60)
  
  - [PrivateRoute.js]https://github.com/stevegibbings/message-board/blob/master/src/components/PrivateRoute.test.js which has unused imports remaining from trials of different testing approaches.

  - Router.js has no tests

  - WithAuthentication.js has no tests
  
***

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install

Clone this repo then

In the project directory, run

### `npm install`

To install node dependencies

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
