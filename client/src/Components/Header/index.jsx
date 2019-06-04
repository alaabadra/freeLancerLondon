import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Col, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Notification from './Notification';
import './style.css';

export default class Header extends Component{
    state={
        userInfo:{
            fullName :'Alaa badra',
            username:'alaabadra95',
            avatar:'https://m.media-amazon.com/images/M/MV5BMTcxOTk4NzkwOV5BMl5BanBnXkFtZTcwMDE3MTUzNA@@._V1_.jpg'
        }
    };
    componentDidMount(){
        //from local storage
    }
    render(){
        const {isLogged} = this.props;
        // const {fullName , username , avatar} = this.state.userInfo;
        const {
            userInfo:{fullName,username,avatar} 
        } = this.state;
        return(
            <>
            <div className="header__container">
                <Navbar collapseOnSelect expand="lg" variant="dark" className="Navbar__container">
                    <Col className="ml-3 mr-5" xs>
                        <Navbar.Brand lg="2">
                            <Link to="/" className="navbar__link navbar__brand">
                            Free work
                            </Link>
                        </Navbar.Brand>
                    </Col>
                    {!isLogged && (
                        <Col md="auto">
                            <Nav>
                                <NavLink to="/login" className="navbar__link">
                                    <div>Login</div>
                                </NavLink>
                                <NavLink to="/signup" className="navbar__link">
                                    <div>Signup</div>
                                </NavLink>
                            </Nav>
                        </Col>
                    )}
                    {isLogged && (
                        <Col md="auto">
                            <Nav>
                                <NavLink to="/home" className="navbar__link">
                                    <div className="navbar__link--text">Home</div>
                                </NavLink>
                                <NavLink to="/app/my-app" className="navbar__link">
                                    <div className="navbar__link--text">My Offer</div>
                                </NavLink>
                                <NavLink to="/app/new-offer" className="navbar__link">
                                    <div className="navbar__link--text">New Offer</div>
                                </NavLink>
                            </Nav>
                        </Col>
                        // <Col md="auto">
                        //     <Dropdown>
                        //         <Dropdown.Toggle id="dropdown-basic" className="nav__dropdown">
                        //             <img src={avatar} alt="avatar" className="nav__avatar"/>
                        //             {fullName}
                        //         </Dropdown.Toggle>
                        //         <Dropdown.Menu className="dropdown__menu-avatar">
                        //             <Dropdown.Item 
                        //                 as={Link}
                        //                 to={`/app/profile/:${username}`}
                        //                 className="dropdown__item"
                        //            >
                        //                 Profile
                        //             </Dropdown.Item>
                        //             <Dropdown.Divider/>
                        //             <Dropdown.Item
                        //             as={Link}
                        //             to="/logout"
                        //             className="dropdown__item"
                        //             >
                        //             Log out</Dropdown.Item>
                        //         </Dropdown.Menu>
                        //     </Dropdown>
                        // </Col>
                        // <Col md="auto">
                        //     <Notification />
                        // </Col>
                    )}

                </Navbar>
            </div>
            <Notification />
            </>
        )
    }
} 