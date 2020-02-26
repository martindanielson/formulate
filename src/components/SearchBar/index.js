import React, { useContext } from "react";
import styled from "styled-components";

import { FinderContext } from "../Finder";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  background: #111;
  padding: 20px;
  margin-bottom: 20px;

  & p {
    margin: 0;

    color: #aaa;
  }
  & a {
    color: #fff;
  }
`;

const Input = styled.input`
  padding: 10px 20px;
  background: white;
`;

const SearchBar = props => {
  const { setQuery, resetState } = useContext(FinderContext);

  const perma = `//${window.location.host}/?q=${encodeURIComponent(
    props.value
  )}`;

  return (
    <Container>
      <Input {...props} autoFocus onChange={setQuery} />
      <button onClick={resetState}>Reset</button>
      <p>
        Permalink: <a href={perma}>{`${window.location.protocol}${perma}`}</a>
      </p>
    </Container>
  );
};

export default SearchBar;
