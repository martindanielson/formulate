# Fullstack assignment: Crafting a GraphQL-backed React app

Build an app that consumes a GraphQL API. Either your own or one that you are familiar with. You can also pick one from here: https://github.com/APIs-guru/graphql-apis, e.g. the GitHub API (see below).

1. It must include an input field that starts searching as you type. Try to ensure a smooth user experience and reasonable usage of the API.
2. It should list the top 20 matched results below the input field in a grid where you have 2 items on a row if the available width for the search result is below 700px. If the width available is 700px or more — allow for 4 items per row.
3. Every search result should have a unique persistent URL that you can browse to and see a certain search result.
4. On initial load make the input field have focus.
5. When you click on a search result it should become 50% transparent and if you click it again it should become non-transparent again. If the same result appears when searching for a different query it should keep the transparent state. It is OK if all search results are non-transparent after every full browser reload.
6. There should be a way to reset the app to the initial state without a full browser reload.

Feel free to use starter kits like for example create-react-app or similar to get started. For functionality we would prefer that you use as few libraries as possible.

We would like for the project to have a reasonable code structure and a strategy for how to keep the code maintainable if the project would grow.

The look and feel is not very important but we would like to see some reasonable layout logic.

## Example API: GitHub

You could for example search GitHub for repositories that match the query “react” and the users starring them. Here is a guide to get going:
https://developer.github.com/v4/guides/forming-calls/

```
Example query

query {
  search(query:"react", first: 10, type:REPOSITORY){
    edges {
      node {
        ...onRepository {
          name
          stargazers(first: 10) {
            nodes {
              avatarUrl
            }
          }
        }
      }
    }
  }
}
```
