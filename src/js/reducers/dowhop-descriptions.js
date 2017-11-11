// @flow

import {
  ADD_DOWHOP_DESCRIPTION,
  UPDATE_DOWHOP_DESCRIPTION,
  REMOVE_DOWHOP_DESCRIPTION,
  REMOVE_DOWHOP_DESCRIPTIONS,
  SET_INPUT_VALUE
} from '../actions/actions';

const DEFAULT_INPUT_STATE = {
  valueTitle: '',
  valueWhy: '',
  valueWho: '',
  valueYou: '',
  valueWhat: '',
  valueWhen: '',
  valueWhere: '',
  valueCost: ''
};

export function setInputReducer(state: Object = DEFAULT_INPUT_STATE, action: Object) {
  switch (action.type) {
    // case INIT_SOCIAL_URL_INPUT_VALUES:
    //   return state;
    // case SET_SOCIAL_URL_INPUT_VALUES:
    //   return action.socialInputs;
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.input]: action.value
      };
    default:
      return state;
  }
}

export function doWhopDescriptionsReducer(state: Array<Object> = [], action: Object) {
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
    case REMOVE_DOWHOP_DESCRIPTIONS:
      return [];
    default:
      return state;
  }
}
