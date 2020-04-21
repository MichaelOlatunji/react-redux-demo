import React from 'react';
import { Provider} from 'react-redux';
import './App.css';
import store from './components/redux/store';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    </div>
  );
}

export default App;
