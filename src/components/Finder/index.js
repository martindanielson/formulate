import React, { Component, createContext } from "react";

import SearchBar from "../SearchBar";
import Result from "../Result";

export const FinderContext = createContext();

const fetchStargazers = (repository, { signal }) => {
  const query = `
query {
  search(query: "${repository}", first: 20, type: REPOSITORY){
    edges {
      node {
        ... on Repository {
          databaseId
          url
          name
          stargazers(first: 6) {
            nodes {
              databaseId
              name
              avatarUrl
            }
          }
        }
      }
    }
  }
}
  `;

  return fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${"3b41d6563a501d8fe9d7ca43a0e09e9c0a79b9ec"}`
    },
    body: JSON.stringify({
      query
    }),
    signal
  });
};

const initialState = {
  query: "",
  data: [],
  selected: [],
  _controller: undefined
};

class Finder extends Component {
  state = {
    ...initialState,
    setQuery: async e => {
      const query = (e.target && e.target.value) || e;
      if (this.state._controller) this.state._controller.abort();

      const _controller = new AbortController();
      this.setState({ query, _controller });

      try {
        const response = await fetchStargazers(query, _controller);
        const data = await response.json();
        this.state.setData(data);
      } catch (_) {}
    },
    toggleSelected: id => {
      this.setState(({ selected }) => {
        let nextSelected = [...selected];
        if (selected.includes(id)) {
          nextSelected = nextSelected.filter(item => item !== id);
        } else {
          nextSelected.push(id);
        }

        return {
          selected: nextSelected
        };
      });
    },
    setData: ({ data }) => {
      const repositories = [];

      for (let {
        node: {
          databaseId: id,
          stargazers: { nodes: stargazers },
          ...repository
        }
      } of data.search.edges) {
        repositories.push({
          ...repository,
          id,
          stargazers: stargazers.map(({ databaseId: id, ...stargazer }) => ({
            id,
            ...stargazer
          }))
        });
      }

      this.setState({
        data: repositories
      });
    },
    resetState: () => {
      this.setState({ ...initialState });
    }
  };

  componentDidMount() {
    if (window.location.search.length > 1) {
      this.state.setQuery(decodeURIComponent("tes%20ting"));
    }
  }

  render() {
    return (
      <FinderContext.Provider value={this.state}>
        <SearchBar value={this.state.query} />
        <Result repositories={this.state.data} />
      </FinderContext.Provider>
    );
  }
}

export default Finder;
