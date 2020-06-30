import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import InterL from './InterL';

const Styles = styled.div`
    .navbar {
        
        font-family: Trebuchet MS;
    }

    .clrtxtcyan {
        background-color: #144f5d;
    }

    .navbar-brand{
       color:  white;

    }
     .navbar-nav .nav-link{
        color:  white;
        &:hover {
            color: #144f5d;
            background-color: white;
        }
     }
    .logo {
        font-size: 2rem;
    }
    @media only screen and (min-width: 992px) {
        .nav-link{
            padding-right: 1rem !important;
            padding-left: 1rem !important;
        }  
    }
    
`;

const NavigationBar = ({ t }) =>(
    <Styles>
        <Navbar collapseOnSelect className="clrtxtcyan" expand="lg" fixed="top" id="nbr" >
            <Navbar.Brand href="/" className="logo">MAP21</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link as={Link} to='/'>{t('navbar.accueil')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/projetmap21'>{t('navbar.projetmap21')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/nuagedethemes'>{t('navbar.nuagedethemes')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/nouveauitem'>{t('navbar.nouveauItem')}</Nav.Link> 
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/syllabus'>{t('navbar.syllabus')}</Nav.Link> 
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/guide'>{t('navbar.guide')}</Nav.Link>  
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/contact'>{t('navbar.contact')}</Nav.Link>  
                    </Nav.Item>
                    <Nav.Item>
                        <InterL/> 
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
export default translate('common')(NavigationBar);