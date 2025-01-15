import React from 'react'


const NavBar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav offset-md-5 nav-text " >
                        <li className="nav-item">
                            <a className="nav-link " href="blogPage.html">Blogs</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tasty Tales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="signup.html">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login.html">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar