import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import api from './api.json'
import reducer from './reducers/reducer'
import App from './App'
import './firebase'

const initialState = {
    user: []
}

const store = createStore(reducer, initialState)

const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, app)
