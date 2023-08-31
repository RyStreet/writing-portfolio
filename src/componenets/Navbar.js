import "../styles/navbar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../images/logo-black-removebg-preview.png";
import github from "../images/github.svg";
import linkedIn from "../images/linkedin-logo.png";


export default function Navigation() {
  return (
    
    <Navbar
      sticky="top"
      collapseOnSelect
      id="navTop"
      fixed="top"
      expand="sm"
      className="navbar bg-light "
    >
      <Navbar.Brand className="   ">
        <img style={{ width: 70, height: 70 }} src={logo}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <a
            href="https://github.com/RyStreet/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{ height: "35px", marginLeft: "13px", color: "pink" }}
              id="github"
              src={github}
            ></img>
          </a>

          <a  href="https://www.linkedin.com/in/ryan-street-media/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer">
            <img
              style={{ height: "30px", marginLeft: "15px" }}
              id="linkedIn"
              src={linkedIn}
            ></img>
            </a>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   
  );
}

{
  /* <ul id="navList" className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
    <a className="nav-link">About</a>
</li>
<li className="nav-item">
    <a className="nav-link">Projects</a>
</li>
<li className="nav-item">
    <a className="nav-link">Contact</a>
</li>
<li className="nav-item">
    <a className="nav-link">Resume</a>
</li>
</ul> */
}
