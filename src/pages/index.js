import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'

export default function Index() {
    return <>
    <Header />
    <section className="list-devices">
    <Link to="/login">Ir a login</Link>
    </section>
</>
}