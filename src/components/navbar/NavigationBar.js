import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { translate } from "react-i18next";
import InterL from "./InterL";

const Styles = styled.div`
  #nbr {
    -webkit-box-shadow: 2.5px 2.5px 2.5px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 2.5px 2.5px 2.5px rgba(0, 0, 0, 0.4);
    box-shadow: 2.5px 2.5px 2.5px 0px rgba(0, 0, 0, 0.4);
  }
  .navbar {
    z-index: 1;
    font-family: Trebuchet MS;
  }
  .nav-link.active {
    color: paleturquoise !important;
  }

  .clrtxtcyan {
    background-color: #144f5d;
  }

  .navbar-brand {
    color: white;
  }
  .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: #144f5d;
      background-color: white;
    }
  }
  .logo {
    font-size: 2rem;
  }
  @media only screen and (min-width: 992px) {
    .nav-link {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
  }
`;

const NavigationBar = ({ t }) => (
  <Styles>
    <Navbar
      collapseOnSelect
      className="clrtxtcyan"
      expand="lg"
      fixed="top"
      id="nbr"
    >
      <Navbar.Brand href="/" className="logo">
        MAP21
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link eventKey="1" as={Link} to="/">
              {t("navbar.accueil")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" as={Link} to="/projetmap21">
              {t("navbar.projetmap21")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" as={Link} to="/nuagedethemes">
              {t("navbar.nuagedethemes")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" as={Link} to="/nouveauitem">
              {t("navbar.nouveauItem")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5" as={Link} to="/syllabus">
              {t("navbar.syllabus")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="6" as={Link} to="/guide">
              {t("navbar.guide")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="7" as={Link} to="/contact">
              {t("navbar.contact")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <InterL />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
export default translate("common")(NavigationBar);
