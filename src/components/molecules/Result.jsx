import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title.jsx';
import Star from '../atoms/Star.jsx';

const Wrapper = styled.div`
  margin: 1rem 0;
  & ul {
    margin: 10px;
    padding: 0;
    list-style: none;
  }
  & a {
    text-decoration: none;
    color: #2597ff;
  }
`;

const StarList = ({repos}) => {
  return (
    <Wrapper>
      <Title>Result</Title>
      <ul>
        {repos.map((val) => {
          return (
            <li>
              <a href={val.node.url} target="_blank">{val.node.name}</a>
              <Star>{val.node.stargazers.totalCount}</Star>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}

export default StarList;
