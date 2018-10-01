import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/app'

const initialState = {
  isFetching: false,
  keyword: "",
  repos: []
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      const { keyword } = action;
      return Object.assign({}, state, {
        isFetching: true,
        keyword
      });

    case RECEIVE_POSTS: {
      const { repos } = action;
      return Object.assign({}, state, {
        repos
      });
    }

    default:
      return initialState;
  }
}
