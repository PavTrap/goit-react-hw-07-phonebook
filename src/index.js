import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux'; 
import { store } from './store/store';
// import { persistR, store } from './store/store';
import './index.css';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistR}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);