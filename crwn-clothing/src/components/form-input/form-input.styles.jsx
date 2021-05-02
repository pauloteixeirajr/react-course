import styled, { css } from 'styled-components';

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

const getLabelShrink = props => {
  if (props.value.length) {
    return shrinkLabel;
  }
  return '';
};

export const LabelContainer = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${getLabelShrink}
`;

const getIsPassword = props => {
  if (props.type === 'password') {
    return css`
      letter-spacing: 0.3em;
    `;
  }
};

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;
  ${getIsPassword}

  &:focus {
    outline: none;
  }

  &:focus ~ ${LabelContainer} {
    ${shrinkLabel}
  }
`;
