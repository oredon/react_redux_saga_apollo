import React from 'react';
import styled from 'styled-components';

const TextBox = styled.input.attrs({
  type: 'text',
})`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  font-size: 0.85rem;
  color: #000000;
`;

const TextBoxComponent = ({ ...props }) => <TextBox {...props} />;

export default TextBoxComponent;
