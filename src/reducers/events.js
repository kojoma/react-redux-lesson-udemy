import { mapKeys } from 'lodash';
import { READ_EVENTS, DELETE_EVENT } from "../actions";

const initialState = {};

export default (events = initialState, action) => {
  switch (action.type) {
    case READ_EVENTS: {
      return mapKeys(action.response.data, 'id');
    }
    case DELETE_EVENT: {
      delete events[action.id];
      return { ...events };
    }
    default:
      return events;
  }
};
