import React from 'react'
import api from '../api.json'

export const ContextData = React.createContext({})

const data = {
  api,
  register: true
}
// eslint-ignore
export function Context ({ children }) {
  localStorage.setItem('login', data.register)
  return <ContextData.Provider value={data}>
    {children}
  </ContextData.Provider>
}

export default ContextData
