import React from 'react';
import { Provider} from 'react-redux';
import './App.css';
import store from './components/redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksChocolateContainer from './components/HooksChocolateContainer';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        {/* <HooksCakeContainer /> */}
        <IceCreamContainer />
        <HooksChocolateContainer />
        <User />
      </Provider>
    </div>
  );
}

export default App;
