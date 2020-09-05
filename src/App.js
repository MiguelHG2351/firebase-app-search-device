import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Context } from './context/context'
import './style.css'
const Index = lazy(() => import('./pages'))
const Login = lazy(() => import('./pages/login'))
const NotFound = lazy(() => import('./pages/notFound'))

const Preloading = () => {
  return <div className="fallback">
    <h2>Cargando...</h2>
  </div>
}

export default function App () {
  return <Suspense fallback={ <Preloading/> }>
    <Context>
      <Router>
        <Switch>
          <Route exact component={Index} path="/" />
          <Route exact component={Login} path="/login" />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Context>
  </Suspense>
}
