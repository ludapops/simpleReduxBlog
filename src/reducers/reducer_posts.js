import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action);
      return _.mapKeys(action.payload.data, 'id');

    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = {...state};
      // newState[post.id] = post;
      // return newState;

      // identical to lines 11-14
      return { ...state, [action.payload.data.id]: action.payload.data };

    case DELETE_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };


    default:
      return state;
  }
}
