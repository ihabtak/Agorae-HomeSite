import React, { Component } from "react";
import i18next from "i18next";

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
      <div style={{ marginTop: "0.5em" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
            class="css-c4d79v"
            style={{ fill: "white" }}
          ></path>
        </svg>

        <select id="lang" onChange={this.changeLanguage} value={this.state.lng}>
          <option
            className={this.state.lng === "fr" ? "fr active" : "fr"}
            value="fr"
          >
            FR
          </option>
          <option
            className={this.state.lng === "en" ? "en active" : "en"}
            value="en"
          >
            EN
          </option>
        </select>
      </div>
    );
  }
}
export default InterL;
