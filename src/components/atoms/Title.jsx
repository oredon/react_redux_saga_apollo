import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  padding: 0.4em 0.5em;
  color: #494949;
  background: #f4f4f4;
  border-left: solid 5px #7db4e6;
  border-bottom: solid 3px #d7d7d7;
`;

const TitleComponent = ({ ...props }) => <Title {...props} />;

export default TitleComponent;
