import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png';
import './Navbar.css';
import { adminContext, CartContext } from '../../App';


function Header() {
  const [cart] = useContext(CartContext);
  const [isAdminLogin] = useContext(adminContext) 
  return (
    <Navbar bg="light" expand="lg" className='sticky-top'>
      <Container>
        <Navbar.Brand>
          <Link to="/"> <h1 className="logo">𝖘𝖚𝖕𝖊𝖗 𝖉𝖊𝖆𝖑</h1> </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAdminLogin && <Link className='navItems' to="/dashboard">Dashboard</Link>}
            <Link className='navItems' to="/allProducts">Products</Link>
            <Link className='navItems' to="/shipment">Shipment</Link>
            <Link className='navItems' to="/login">Sign up</Link>
          </Nav>
          <Link to={cart.length <= 0 ? '/allProducts' : '/cart'}>
            <div className="NavIcon">
              <AiOutlineShoppingCart className='pdIcon' /> <h5>{cart.length}</h5>

            </div>
          </Link>
          <div className="adminLogin">
            <Link to="/admin-login">
              <AiOutlineUserAdd className="adminIcon" />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
