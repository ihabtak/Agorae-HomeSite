import React from 'react'
import styled from 'styled-components';
import CloudTag  from './CloudTag';
import { translate } from 'react-i18next';


const Styles = styled.div`
    .intro {
        margin: 0 15%;
    }
    h1 {
        color: #808080;
        font-family: Trebuchet MS;
        margin-top:  3%;
    }
    p {
        font-family: Trebuchet MS; 
    }
`;

const nuageDeTheme = ({ t }) => (
    
    <div className='app-outer'>
        <div className='app-inner'>
        <Styles>
          <h1>{t('nuageDeThemes.title')}</h1>
          <p>{t('nuageDeThemes.content')}</p>    
        <CloudTag/>
        </Styles>
        </div>
    </div>

    
    
)

export default translate('common')(nuageDeTheme);