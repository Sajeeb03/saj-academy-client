import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { AuthContext } from '../../Context/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    return (
        <Navbar className='shadow-lg' collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/">
                        <img style={{ height: "50px", width: "300px", marginLeft: '-25px', padding: '0px' }} className='' src={logo} alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-primary me-4 fs-5" : "text-decoration-none text-dark me-4 fs-5"} to="/home">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-primary me-4 fs-5" : "text-decoration-none text-dark me-4 fs-5"} to="/courses">Courses</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-primary me-4 fs-5" : "text-decoration-none text-dark me-4 fs-5"} to="/faq">FAQ</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-primary me-4 fs-5" : "text-decoration-none text-dark me-4 fs-5"} to="/blogs">Blogs</NavLink>
                    </Nav>
                    <div>
                        <>
                            {user?.uid ?
                                <>
                                    <button className='' onClick={handleSignOut}>Sign Out</button>
                                    <>{user.photoURL ? <img title={user.displayName} style={{ width: "40px", borderRadius: "50%" }} className='ms-1' src={user.photoURL} alt="" /> : <FaUser className='ms-2' />}</>
                                </>

                                :
                                <Link to="/login" className='text-decoration-none'>Sign In</Link>}
                        </>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;