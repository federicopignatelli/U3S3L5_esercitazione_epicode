import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../asset/logo/logo.png'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Sidebar = () => {

    const search = (event) => {
        event.preventDefault();
    };

    return (

        <div className="col col-2">
            <Navbar expand="md" fixed="left" className="justify-content-between" id="sidebar">
                <Container className="flex-column align-items-start">
                    <Navbar.Brand href="index.html">
                        <img
                            src={Logo}
                            alt="Spotify Logo"
                            width="131"
                            height="40"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
                    <Navbar.Collapse id="navbarNavAltMarkup">
                        <Nav className="navbar-nav">
                            <ul>
                                <li>
                                    <a className="nav-item nav-link d-flex align-items-center">
                                        <i className="bi bi-house-door-fill"></i>&nbsp; Home
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-item nav-link d-flex align-items-center">
                                        <i className="bi bi-book-fill"></i>&nbsp; Your Library
                                    </a>
                                </li>
                                <li>
                                    <form className="input-group mt-3" onSubmit={search}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="searchField"
                                            placeholder="Search"
                                            aria-label="Search"
                                            aria-describedby="basic-addon2"
                                        />
                                        <div className="input-group-append">
                                            <Button variant="outline-secondary text-white" type="Submit" className="btn-sm h-100">
                                                GO
                                            </Button>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <div className="nav-btn">
                    <Button variant="primary" className="signup-btn" type="button">
                        Sign Up
                    </Button>
                    <Button variant="secondary" className="login-btn" type="button">
                        Login
                    </Button>
                    <p className="text-white">Cookie Policy | Privacy</p>
                </div>
            </Navbar>
        </div>

    );
};

export default Sidebar;
