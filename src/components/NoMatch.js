import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .notfnd {
    font-family: Trebuchet MS;
    display: block;
    text-align: center;
    height: 250px;
    max-width: 100%;
    margin-bottom: 30px;
    margin-top: 100px;
    padding: 120px;
    color: #144f5d;
  }

  h2 {
    font-size: xxx-large;
    color: #808080;
  }
  p {
    font-size: xx-large;
  }
`;

const NoMatch = () => (
  <Styles>
    <div className="notfnd">
      <span role="img" aria-label="sad face" style={{ fontSize: 100 }}>
        &#128577;
      </span>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/">Go back to the main page</Link>
    </div>
  </Styles>
);
export default NoMatch;
