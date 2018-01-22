// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

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

const App = StackNavigator({
  
  Home: {
    screen: MemoListScreen,
  },
  MemoDetail: {
    screen: MemoDetailScreen,
  },
  MemoEdit: {
    screen: MemoEditScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen,
  },
}, {
  navigationOptions: {
    headerTitle: 'Memot',
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