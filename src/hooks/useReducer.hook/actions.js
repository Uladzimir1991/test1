import { INCREMENT } from './boilerplate';

export const increment = ({ isVisibleElements }) => ({
  type: INCREMENT,
  payload: isVisibleElements,
});
