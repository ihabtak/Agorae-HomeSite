import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
export const CONTAINER = styled.div`
  background: #f7f9fa;
  height: auto;
  width: 90%;
  margin: 3em auto;
  color: red;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media (min-width: 786px) {
    width: 70%;
  }
  span {
    color: red;
  }

  label {
    color: #144f5d;
    font-size: 1.2em;
    font-weight: 400;
  }

  h1 {
    color: #144f5d;
    padding-top: 0.5em;
  }

  .form-group {
    margin-bottom: 2.5em;
  }
`;

export const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;

  @media (min-width: 786px) {
    width: 70%;
  }
`;

export const BUTTON = styled(Button)`
  background: #1863ab;
  border: none;
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #1d3461;
  }
`;
