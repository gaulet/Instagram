import React from 'react';
import TextField from '@material-ui/core/TextField';
import { object, bool, func } from 'prop-types';

const TextFieldForm = ({
  input: { value, onChange, name, ...restInput },
  requiredField,
  meta,
  handleCapitalizeSkill = null,
  ...rest
}) => {
  const showError = meta.touched && requiredField ? !meta.valid : meta.error && meta.touched && meta.dirty;

  return (
    <TextField
      {...rest}
      {...restInput}
      name={name}
      value={!handleCapitalizeSkill ? value : handleCapitalizeSkill(value)}
      onChange={onChange}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={meta.error && meta.touched}
    />
  );
};

TextFieldForm.propTypes = {
  input: object,
  meta: object,
  requiredField: bool,
  handleCapitalizeSkill: func,
};

export default TextFieldForm;
