import React from 'react'
import { Link } from 'react-router-dom'

export default function CardRepo() {
    return <>
    <div className="card">
                <div className="description-repositorie">
                    <div className="name-project">
                        <h2>firebase-app-search-device</h2>
                        <div className="visit-project">
                            <Link to="/">Visit</Link>
                        </div>
                    </div>
                    <div className="state-project">
                        <Link to="/firebase-app-search-device.vercel.app" className="enviroment">
                            <span className="state-deployment"></span>
                            <p>firebase-app-search-device.vercel.app</p>
                            <p className="state-repositorie">production</p>
                        </Link>
                        <Link to="/firebase-app-search-device.vercel.app" className="enviroment">
                            <span className="state-deployment"></span>
                            <p>firebase-app-search-device.vercel.app</p>
                            <p className="state-repositorie">Latest</p>
                        </Link>
                    </div>
                </div>
                <div className="bar-repositorie"></div>
                <div className="repositorie">
                    <div className="info-repo">
                        <a href="https://github.com/MiguelHG2351"><i className="fab fa-github"></i>MiguelHG2351/firebase-app-search-device</a>
                    </div>
                </div>
            </div>
</>
} 