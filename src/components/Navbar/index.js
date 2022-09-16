import { Link } from "react-router-dom"

import "./index.css"

import React from 'react'

const PageNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbarBg shadow">
    <div className="container">
    <Link to="/" ><img className="navHeading" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:120/https://file-uploads.teachablecdn.com/ffe442a414904138b18e5b532bba9da1/167af06d542e43a999f07c44645dbc1d" alt="logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
        <li>
            <Link to="/" className="navMenuItem">Home</Link>
        </li>
        <li>
            <Link to="/about" className="navMenuItem">About</Link>
        </li>
        <li>
            <Link to="/articles-list" className="navMenuItem">Articles</Link>
        </li>
        
    </ul>
    </div>
    </div>
</nav>
    )
}

export default PageNavbar
