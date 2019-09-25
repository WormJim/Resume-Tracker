import React, { forwardRef, memo, Ref, FormEvent } from 'react';
import { TextField } from '@material-ui/core';

export interface InputProps {
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  error: boolean; // from useInput
  errorText?: string;
  label?: string;
  onChange: (event: FormEvent) => void; // from useInput
  placeHolder?: string;
  required?: boolean;
  value?: string;
}

export interface TextInputProps extends InputProps {
  helperText?: string;
  multiline?: boolean;
}

const TextInput = (
  {
    autoFocus,
    className,
    disabled,
    error,
    errorText,
    helperText,
    label,
    multiline,
    onChange,
    placeHolder,
    required,
    value,
  }: TextInputProps,
  ref: Ref<HTMLDivElement>,
) => (
  <TextField
    // autoComplete={}
    autoFocus={autoFocus}
    className={className}
    disabled={disabled}
    error={error}
    // FormHelperTextProps={}
    // fullWidth={}
    helperText={error ? errorText : helperText}
    // id={} The id of the input element. Use this prop to make label and helperText accessible for screen readers.
    // InputLabelProps={}
    // InputProps={}
    // inputProps={}
    inputRef={ref}
    label={label}
    // margin={}
    multiline={multiline}
    // name={}
    onChange={onChange}
    placeholder={placeHolder}
    required={required}
    // rows={}
    // rowsMax={}
    // select={}
    // SelectProps={}
    type="text"
    value={value}
    // variant={}
  />
);

export default memo(forwardRef(TextInput));
