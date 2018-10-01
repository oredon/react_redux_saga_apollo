import React from 'react';
import styled from 'styled-components';

const Star = styled.span`
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 0 0 0 1rem;
  padding: 3px;
  &:before {
    content: "★";
    padding-right: 0.3rem;
    color: #ffc800;
  }
`;

const StarComponent = ({ ...props }) => <Star {...props} />;

export default StarComponent;
