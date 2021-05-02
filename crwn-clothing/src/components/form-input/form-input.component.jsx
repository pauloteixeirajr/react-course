import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  LabelContainer,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      <LabelContainer {...otherProps}>{label}</LabelContainer>
    </GroupContainer>
  );
};

export default FormInput;
