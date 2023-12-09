import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import { Provider } from 'react-redux';
import {rootReducer} from './redux.js'

//////redux-thunk
// import { createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { applyMiddleware } from 'redux';

// export const myStore = createStore(rootReducer,applyMiddleware(thunk))


//Redux-saga
import createSagaMiddleware from "redux-saga"
import { mySaga } from './Saga';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux';

const sagaMiddleware = createSagaMiddleware()

export const myStore = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={myStore}>
      <App/>
    </Provider>
  // </React.StrictMode>
);


