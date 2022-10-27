import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { AuthContext } from '../../Context/AuthProvider';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Button } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [radioValue, setRadioValue] = useState('1');
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }


    const radios = [
        { name: 'Light', value: '1' },
        { name: 'Dark', value: '2' },
    ];

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
                    <Nav className="me-auto title">
                        <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-primary me-4 fs-5" : "text-decoration-none text-dark me-4 fs-5"} to="/home">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-primary me-4 fs-5" : "text-decoration-none text-dark me-4 fs-5"} to="/courses">Courses</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-primary me-4 fs-5" : "text-decoration-none text-dark me-4 fs-5"} to="/faq">FAQ</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-primary me-4 fs-5" : "text-decoration-none text-dark me-4 fs-5"} to="/blogs">Blogs</NavLink>
                    </Nav>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-dark' : 'outline-primary'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <div className='login-btn'>
                        <>
                            {
                                user?.uid ?
                                <>
                                        <Button variant='outline-dark' onClick={handleSignOut}>Sign Out</Button>
                                        <>{user.photoURL ? <img title={user.displayName} style={{ width: "40px", height: "40px", borderRadius: "50%" }} className='ms-3' src={user.photoURL} alt="" /> : <FaUser className='ms-2' />}</>
                                </>

                                :
                                    <Link to="/login"><Button variant='outline-dark'>Sign In</Button></Link>
                            }
                        </>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;