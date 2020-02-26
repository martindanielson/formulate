import React from "react";
import styled from "styled-components";

import Item from "./Item";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-gap: 20px;
  @media (min-width: 700px) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
  }
`;

const Result = ({ repositories }) => {
  return (
    <Container>
      {repositories.map(repository => (
        <Item {...repository} key={`repository-${repository.id}`} />
      ))}
    </Container>
  );
};

export default Result;
