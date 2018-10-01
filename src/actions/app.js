export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function requestPosts(keyword) {
  return {
    type: REQUEST_POSTS,
    keyword
  }
}

export function receivePosts(repos) {
  return {
    type: RECEIVE_POSTS,
    repos
  }
}
