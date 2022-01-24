/* eslint-disable react/prop-types */
import React from 'react';

import {Group, FormInputLabelContainer,
  FormInputContainer} from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => {
  return (
    <Group>
      <FormInputContainer type="text"
        onChange={handleChange}
        {...otherProps} />
      {
            label ?
            (<FormInputLabelContainer
              length={otherProps.value.length} >
              {label}
            </FormInputLabelContainer>):
            null
      }
    </Group>
  );
};

export default FormInput;
