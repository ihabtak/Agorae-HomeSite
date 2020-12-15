import React from 'react'
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { translate } from 'react-i18next';
import Items  from './Items';


const Styles = styled.div`
    .intro {
        font-family: Trebuchet MS;
        margin-bottom:  3%;
        text-align:  justify;
    }
    h1 {
        color: #808080;
        text-align:  center;
        margin-bottom:  2%;
     }
     .cdc {
        white-space: nowrap;
        font-family: Trebuchet MS;
        font-style: normal;
        font-weight: normal;
        font-size: 2.5rem;
        color: rgba(128,128,128,1);
    }
    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }
`;

const Home = ({ t }) => (
    <Row>
        <Col md={{ span: 10, offset: 1 }}>
            <Styles>
                <div className="intro">
                    <h1>{t('home.title')}</h1>
                    <p>{t('home.content')}</p>
                </div>
            </Styles>
        </Col>
        <Col md={{ span: 10, offset: 1 }}>
        <Styles>

            <Items/>
        </Styles>
        </Col>
    </Row>
    
);

export default translate('common')(Home);

