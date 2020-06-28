import React, { Component  } from 'react';
import i18next from 'i18next';
import i18nL from '../../assets/i18n_symbol.png';


class InterL extends Component {
    state = {
        lng: i18next.language,
      };

    changeLanguage = (e) => {
        const lng = e.target.value;
        this.setState({ lng: lng }, () => {
          i18next.changeLanguage(lng);
        });
      };
      
      render() {
        return (
          <div style={{'marginTop': '0.5em'}}>
            <img alt="symbol" src={i18nL} border="0"></img>
            <select id="lang" onChange={this.changeLanguage} value={this.state.lng}>
                  <option className={this.state.lng === 'fr' ? 'fr active' : 'fr'} value="fr">FR</option>
                  <option className={this.state.lng === 'en' ? 'en active' : 'en'} value="en">EN</option>
               </select>
            </div>

    );
  }
}
export default InterL;