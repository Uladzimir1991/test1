import { INCREMENT } from './boilerplate';

export default function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        isVisibleElements: state.isVisibleElements + action.payload,
      };
    default:
      return { ...state };
  }
}
