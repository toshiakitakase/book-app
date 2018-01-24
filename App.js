// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';

// import AppBar from './src/components/AppBar'

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';

import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen'


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <AppBar />
//         {/* <MemoListScreen /> */}
//         {/* <MemoDetailScreen /> */}
//         {/* <MemoEditScreen /> */}
//         {/* <LoginScreen /> */}
//         <SignupScreen />
//       </View>
//     );
//   }
// }

const config = {
  apiKey: 'AIzaSyAye1Jib2KYxwPgeDI7BIEz4N9AMUTd7Pw',
  authDomain: 'book-app-5f173.firebaseapp.com',
  databaseURL: 'https://book-app-5f173.firebaseio.com',
  projectId: 'book-app-5f173',
  storageBucket: 'book-app-5f173.appspot.com',
  messagingSenderId: '587387063236',
};
firebase.initializeApp(config);

const App = StackNavigator({

  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen,
  },
  Home: {
    screen: MemoListScreen,
  },
  MemoDetail: {
    screen: MemoDetailScreen,
  },
  MemoEdit: {
    screen: MemoEditScreen,
  },

}, {
  navigationOptions: {
    headerTitle: 'Memot',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff'
    }
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fffdf6',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingTop: 78,
//   }
// });

export default App;