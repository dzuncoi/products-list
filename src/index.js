import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/root-reducer'
import './index.module.scss'
import App from './App'
import AppLayout from './Layout'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render((
  <Provider store={store}>
    <AppLayout>
      <App />
    </AppLayout>
  </Provider>
), document.getElementById('root'))
