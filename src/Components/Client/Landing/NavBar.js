
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const NavBar = () => {

  const [collapsed, setCollapsed] = useState(false);


  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const closeNavbar = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true)
    }
  };
  const [checkHidden, setCheckHidden] = useState(false)

 


  return (


    <Navbar style={{ backgroundColor: "#FFF" }} className={`position-fixed ${checkHidden ? "" : ""}    top-0 end-0 start-0  `} collapseOnSelect expand="lg" >
      <Container fluid  >
        <Navbar.Brand className=' me-3' href="#home">
          <Image width={80} height={80} src="/logo.jpg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link onClick={closeNavbar} className="fs-5   me-4" href="#Home">
              الرئيسية
            </Nav.Link>
            <Nav.Link onClick={closeNavbar} className="fs-5   me-4" href="#WhoWeAre">
              من نحن
            </Nav.Link>
            <Nav.Link onClick={closeNavbar} className="fs-5   me-4" href="#Services">
              خدماتنا
            </Nav.Link>
            <Nav.Link onClick={closeNavbar} className="fs-5   me-4" href="#projects">
              مشاريعنا
            </Nav.Link>
            <Nav.Link onClick={closeNavbar} className="fs-5   me-4" href="#contact-us">
              تواصل معنا
            </Nav.Link>
            <Nav.Link onClick={closeNavbar} className="fs-5   me-4" href="#clients">
              عملائنا
            </Nav.Link>




          </Nav>
          <div className="setting-nav     d-flex justify-content-between ms-5">

            <Link onClick={closeNavbar} className="fs-5   ms-4    d-flex    gap-1" to="/Dashboard/SignIn">
              <span className=' '> تسجيل الدخول</span>
              <BsFillPersonFill className="fs-5 mt-1" />
            </Link>
            <NavDropdown className='    fs-5 ' title="    اللغة     " id="collapsible-nav-dropdown">

              <NavDropdown.Item className='text-end  d-flex justify-content-between ' href="#action/3.2">
                <span>   العربيه</span>
                <img src="saudi.png" alt="saudi flag" width={30} height={20} />
              </NavDropdown.Item>
              <NavDropdown.Item className='text-end  d-flex justify-content-between' href="#action/3.3">
                <span>الانجليزيه</span>
                <img src="usa.png" alt="USA flag" width={30} height={20} />
              </NavDropdown.Item>



            </NavDropdown>

          </div>
          <Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;