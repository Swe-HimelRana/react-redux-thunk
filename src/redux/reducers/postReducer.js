import {FETCH_POSTS, CREATE_POST} from '../actions/types'

const initialState = {
  items : [],
  item: []
}

export default function postReducer(state=initialState, action){
  switch (action.type) {
    case FETCH_POSTS:   
        return {
          ...state,
          items: action.payload
        }
    case CREATE_POST:
        return {
          ...state,
          item: action.payload
        }
    default:
      return state;

  }
}
