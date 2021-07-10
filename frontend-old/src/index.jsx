import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './main/routes'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import reducers from './main/reducers'

// permite a utilização da extensão do chrome para o redux
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// middleware que permite a requisição assincrona (espera promise ser resolvida)
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, 
    document.getElementById('app')
)