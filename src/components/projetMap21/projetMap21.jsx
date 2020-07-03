import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import rose from '../../assets/rosedesvues.jpg';

const Styles = styled.div`
    .intro {
        font-family: Trebuchet MS;
        margin-top:  3%;
        margin-bottom:  3%;
        text-align:  justify;
    }
    h1 {
        color: #808080;
        text-align:  center;
        margin-bottom:  2%;
     }
     @media only screen and (min-width: 992px) {
     div img {
        max-width: 50%;
      }
    }
    img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        max-width:80%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
`;

const projetMap21 = ({ t }) => (
    <Styles>
        <div className="intro">
            <h1>{t('projetMap21.title')}</h1>
            <p>{t('projetMap21.content-p1')}</p>
            <p>{t('projetMap21.content-p2')}</p>
            <p>{t('projetMap21.content-p3')}</p>
            <p>{t('projetMap21.content-p4')}</p>
            <div><img src={rose} alt="rose des vues" /></div>
            <br/>
            <p>{t('projetMap21.content-p5')}</p>
            <h2>{t('projetMap21.sub-title-1')}</h2>
            <p>{t('projetMap21.sub1-content-p1')}</p>
            <h2>{t('projetMap21.sub-title-2')}</h2>
            <p>{t('projetMap21.sub2-content-p1')}</p>
            <p>{t('projetMap21.sub2-content-p2')}</p>
            <p>{t('projetMap21.sub2-content-p3')}</p>
            <h2>{t('projetMap21.sub-title-3')}</h2>
            <p>{t('projetMap21.sub3-content-p1')}</p>
            <h2>{t('projetMap21.sub-title-4')}</h2>
            <p>{t('projetMap21.sub4-content-p1')}</p>
            <p>{t('projetMap21.sub4-content-p2')}</p>
            
        </div>
    </Styles>
)

export default translate('common')(projetMap21);