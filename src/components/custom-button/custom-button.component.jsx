/* eslint-disable react/prop-types */
import React from 'react';

import './custom-button.styles.scss';
import {CustomButtonContainer} from './custom-button.styles';

const CustomButton = ({children, ...otherProps}) => {
  return (
    <CustomButtonContainer {...otherProps}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
