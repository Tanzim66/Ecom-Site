import styled, {css} from 'styled-components';

const subColor = 'grey';
const mailColor = 'black';

const ShrinkLabel = css`
    top: -14px;
    font-size: 12px;
    color: ${mailColor};
`;

const FormInputLabelStyles = css`
    top: 10px;
    font-size: 16px;
    color: ${subColor}};
`;

const getLabelStyles = (props) => {
  console.log(props);
  if (props.length) {
    return ShrinkLabel;
  } else {
    return FormInputLabelStyles;
  }
};

export const Group = styled.div`
    position: relative;
    margin: 45px 0;
`;

export const FormInputLabelContainer = styled.label`
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    transition: 300ms ease all;
    ${getLabelStyles}
`;

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor}};
    margin: 25px 0;
    ${({type}) => type === 'password' ? 'letter-spacing: 0.3em;' : ''}

    &:focus{
        outline: none;
    }

    &:focus ~ ${FormInputLabelContainer}{
        ${ShrinkLabel}
    }
`;
