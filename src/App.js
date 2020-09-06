import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style.css'
const Index = lazy(() => import('./pages'))
const Login = lazy(() => import('./pages/login'))
const NotFound = lazy(() => import('./pages/notFound'))
const Profile = lazy(() => import('./pages/profile'))

const Preloading = () => {
  return <div className="fallback">
    <h2>Cargando...</h2>
  </div>
}

export default function App () {
  return <Suspense fallback={ <Preloading/> }>
      <Router>
        <Switch>
          <Route exact component={Index} path="/" />
          <Route exact component={Login} path="/login" />
          <Route component={Profile} path="/profile" />
          <Route component={NotFound} />
        </Switch>
      </Router>
  </Suspense>
}
