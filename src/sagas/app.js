import fetch from 'isomorphic-fetch';
import { receivePosts, REQUEST_POSTS } from '../actions/app';
import { call, fork, takeLatest, put, throttle } from 'redux-saga/effects';

// GraphQL導入
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import gql from 'graphql-tag';

// API設定
var githubToken = 'GITHUB DEVELOPPER TOKEN';
var apiUrl = 'https://api.github.com/graphql';

// ApolloClient network実装
const httpLink = new HttpLink({ uri: apiUrl });
const authLink = new ApolloLink((operation, forward) => {
  // headersに認証情報を設定
  operation.setContext({
    headers: {
      authorization: `bearer ${githubToken}`
    }
  });

  // middlewareを抜けて次の処理へ
  return forward(operation);
});

// ApolloClient作成
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// gql関数でGraphQL用のクエリを作成
const RepositorySearchQuery = gql`
  query Search($q: String!) {
    search(query: $q, first: 5, type: REPOSITORY) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Repository {
            id,
            name,
            url,
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`


function fetchRepos(keyword) {
  console.log("Search keyword: " + keyword);
  return client
    .query({
      query: RepositorySearchQuery,
      variables: { q: keyword }
    })
    .then(result => {
      console.log("result", result)
      return result.data.search.edges;
    });
}


function* fetchPostsIfNeeded(action) {
  const repos = yield call(fetchRepos, action.keyword);
  yield put(receivePosts(repos));
}

const app = [
  throttle(300, REQUEST_POSTS, fetchPostsIfNeeded)
];

export default app;
