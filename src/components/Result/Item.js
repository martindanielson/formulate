import React, { useContext } from "react";
import styled from "styled-components";

import { FinderContext } from "../Finder";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 20px;
  overflow: hidden;
  word-break: break-word;
  cursor: pointer;

  background: #eee;

  & h3 {
    margin: 15px 0 20px;
    color: #666;
  }

  ${({ selected }) => selected && "opacity: .5"};
`;

const Cover = styled.div`
  display: grid;
  grid-row: 1 / span 2;
  justify-items: center;
  align-items: center;

  background: #333;
  padding: 20px;
`;

const Avatar = styled.img`
  width: ${({ primary }) => (primary ? 60 : 25)}px;
  height: ${({ primary }) => (primary ? 60 : 25)}px;
  border-radius: 50%;
  &:nth-of-type(1n + 2) {
    margin-left: 5px;
  }
`;

const Item = ({ id, name, stargazers }) => {
  const { toggleSelected, selected } = useContext(FinderContext);

  const handleSelect = name => () => {
    toggleSelected(name);
  };

  const [winner, ...runners] = stargazers;

  return (
    <Container onClick={handleSelect(id)} selected={selected.includes(id)}>
      <Cover>
        {winner ? (
          <Avatar alt={winner.name} src={winner.avatarUrl} primary />
        ) : (
          <Avatar
            alt="Fill Murray"
            src="//www.fillmurray.com/100/100"
            primary
          />
        )}
      </Cover>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        {runners.map(({ id, name, avatarUrl }) => (
          <Avatar
            {...{
              alt: name,
              src: avatarUrl,
              key: `stargazer-${id}`
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Item;
