import React from 'react';
import styled from 'styled-components';
import TextBox from '../atoms/TextBox.jsx';
import Title from '../atoms/Title.jsx';

const Wrapper = styled.div`
  margin: 1rem 0;
`;

const TextBoxStyled = styled(TextBox)`
  &:hover {
    border-color: #7db4e6;
  }
`;

const Search = ({changeText, textValue}) => {
  return (
    <Wrapper>
      <Title>Keyword Search</Title>
      <TextBoxStyled onChange={(e) => changeText(e.target.value)} value={textValue} />
    </Wrapper>
  );
}

export default Search;
