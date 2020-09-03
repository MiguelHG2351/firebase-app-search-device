import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './pages'
import Login from './pages/login'
import NotFound from './pages/notFound'
import './style.css'

export default function App() {
    return <Router>
        <Switch>
            <Route exact component={Index} path="/" />
            <Route exact component={Login} path="/login" />
            <Route component={NotFound} />
        </Switch>
    </Router>
}