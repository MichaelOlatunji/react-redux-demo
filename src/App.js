import React from 'react';
import { Provider} from 'react-redux';
import './App.css';
import store from './components/redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <HooksCakeContainer />
      </Provider>
    </div>
  );
}

export default App;
