import React from "react";
import classNames from "classnames";

export const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("radio-button")}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
