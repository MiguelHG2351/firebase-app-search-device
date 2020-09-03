import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './pages'
import './style.css'

export default function App() {
    return <>
    <Router>
        <Switch>
            <Route component={Index} path="/" />
        </Switch>
    </Router>
</>
}