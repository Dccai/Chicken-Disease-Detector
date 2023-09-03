# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup Process (READ THIS PART! VERY IMPORTaNT!)
Copy The Github Code Into Whatever Code Editor You Have. That Part Of The Process Is Self Explanatory. Also, Make Sure To Create A React App To Store The Github Code. Although The Convolution Neural Network Model Should Be Saved As A File In The Source Code, I Would Still Download The Kaggle Dataset I Used In Case The Saved Model Has Not Been Saved (This Shouldn't Be A Worry Though). If It Is Not Saved, Just Retrain The Model Using The DiseaseDetect.py File And Uncomment The Save Model Line At The End To Save The Model (If You Must Retrain, Make Sure To Delete The chickenDisease.keras file, Which May Be Contaminated Or Something). Move the newly trained keras file into the flask-server folder. The Training And Testing Dataset Can Be Downloaded Through This Link: (https://www.kaggle.com/datasets/allandclive/chicken-disease-1?select=Train). I Would Download It Just In Case And Change The Paths (The Paths To The Training And Testing Dataset May Be Different For You) For The Read_CSV Functions. The Training The Convolution Neural Network And Downloading The Dataset Parts Are Optional And Should Only Be Done If The Website Isn't Working For Some Reason. The Next Part Is Necessary. To Allow The Tensorflow Convolution Neural Network To Be Used, Make Sure To Turn On The server.py By First Typing cd flask-server And Then Typing python server.py To Turn On Flask Server. In Addition, If The Proxy Or localhost Location Is Different For You (Mine is localhost:5000), You May Need To Set The Proxy Link In Packages.json To Your Localhost Proxy For The Flask Server. Also, I Would Go Through The Imports To See If There Are Any Libraries Your Code Editor Does Not Have (Such As TensorFlow). Have Fun Using This Website!

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
