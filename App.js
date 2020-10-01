import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux' 
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers';

import Navigation from './src/NavigationContainer';

const App = ()=>{
 
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return(
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
}
export default App;