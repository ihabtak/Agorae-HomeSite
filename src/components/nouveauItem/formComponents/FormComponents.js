import { connect } from "formik";
import React, {Fragment} from "react";
import { Form } from "react-bootstrap";

const FormItem = connect((props) => {
  const { label, ...inputProps } = props;
  const { errors, touched } = props.formik;
  return (
    <Form.Group controlId={inputProps.name}>
      {label && <Form.Label>{label}</Form.Label>}

      <FormInput {...inputProps} />

      {errors[inputProps.name] && touched[inputProps.name] && (
        <Form.Text className="text-muted">{errors[inputProps.name]}</Form.Text>
      )}
    </Form.Group>
  );
});

export default FormItem;

function extractInputProps({ formik, options, ...otherProps }, option) {
  const props = {
    value: formik.values[otherProps.name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    ...otherProps,
  };

  if (props.type === "checkbox") {
    props.value = option.value;
    props.checked = formik.values[props.name];
    props.onChange = (e) => {
      let val = formik.values[props.name];
      e.target.checked
        ? val.push(e.target.value)
        : val.slice(val.indexOf(e.target.value));
      formik.setFieldValue(val);
    };
  } else if (props.type === "radio") {
    props.value = option.value;
    props.checked = option.value === formik.values[props.name];
  }

  return props;
}

const FormInput = (props) => {
  switch (props.type) {
    case "radio":
    case "checkbox":
      return CheckInput(props);
    case "select":
      return SelectInput(props);
    case "textarea":
      return TextAreaInput(props);
    default:
      return TextInput(props);
  }
};

const TextInput = (props) => <Form.Control {...extractInputProps(props)} />;
const TextAreaInput = (props) => (
  <Form.Control as="textarea" rows="6" {...extractInputProps(props)} />
);

const SelectInput = (props) => (
  <Form.Control as="select" {...extractInputProps(props)}>
    <option value="">Select a value</option>
    {props.options.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label || o.value}
      </option>
    ))}
  </Form.Control>
);

const CheckInput = props => (
  <Fragment>
    {props.options.map(option => (
      <label key={option.value}>
        <input {...extractInputProps(props, option)} />
        {option.label || option.value}
      </label>
    ))}
  </Fragment>
);
