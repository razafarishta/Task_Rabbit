import 'react-native-gesture-handler';
import React,{useEffect} from 'react';

import {Provider} from 'react-redux' 
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers';

import Navigation from './src/NavigationContainer';
import { BackHandler,Alert } from 'react-native';

const App = ()=>{

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
 
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return(
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
}
export default App;