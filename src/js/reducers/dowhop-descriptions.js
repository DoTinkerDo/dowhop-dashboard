// @flow

import { ADD_DOWHOP_DESCRIPTION, UPDATE_DOWHOP_DESCRIPTION, REMOVE_DOWHOP_DESCRIPTION } from '../actions/actions';

export default function doWhopDescriptionsReducer(state: Array<Object> = [], action: Object) {
  switch (action.type) {
    case ADD_DOWHOP_DESCRIPTION:
      return [...state, action.payload];
    case UPDATE_DOWHOP_DESCRIPTION: {
      const idx = state.findIndex(
        dowhopDescription => dowhopDescription && dowhopDescription.doWhopDescriptionKey === action.metadata
      );
      return [...state.slice(0, idx), action.payload, ...state.slice(idx + 1)];
    }
    case REMOVE_DOWHOP_DESCRIPTION: {
      const idx = state.findIndex(
        dowhopDescription => dowhopDescription && dowhopDescription.doWhopDescriptionKey === action.metadata
      );
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    }
    default:
      return state;
  }
}
