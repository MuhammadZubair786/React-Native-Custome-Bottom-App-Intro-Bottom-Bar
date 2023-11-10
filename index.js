/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import {name as appName} from './app.json';


//   function Main  () {
//     <FirebaseAppProvider config={firebaseConfig}>
//       <App />
//     </FirebaseAppProvider>
//   }
AppRegistry.registerComponent(appName, () => App);
