import React, { forwardRef, useRef, useImperativeHandle } from "react";
import classes from "./input.module.css";

export const Input = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        focus: activate,
      };
    },
    []
  );

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={inputRef}
      />
    </div>
  );
});
