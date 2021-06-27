import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import reducers from './main/reducers'

// permite a utilização da extensão do chrome para o redux
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// middleware que permite a requisição assincrona (espera promise ser resolvida)
const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
)