import React, { Component } from 'react';
import Main from './components/MainComponent';
// redux
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
// redux-persist
import { PersistGate } from 'redux-persist/es/integration/react';
// firebase
import { initializeApp } from 'firebase/app';
const firebaseConfig = { databaseURL: 'https://projectsa-tinhtam-default-rtdb.firebaseio.com/' };
initializeApp(firebaseConfig);

const { persistor, store } = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
      <Main />
      </PersistGate>
    </Provider>
    );
  }
}
export default App;