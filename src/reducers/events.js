import { mapKeys } from 'lodash';
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from "../actions";

const initialState = {};

export default (events = initialState, action) => {
  switch (action.type) {
    case READ_EVENTS: {
      return mapKeys(action.response.data, 'id');
    }
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT: {
      const data = action.response.data;
      return { ...events, [data.id]: data };
    }
    case DELETE_EVENT: {
      delete events[action.id];
      return { ...events };
    }
    default:
      return events;
  }
};
