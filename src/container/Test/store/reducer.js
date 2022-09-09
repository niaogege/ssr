import { GETTRACKJSON } from "./constant";

const defaultState = {
  name: "test",
  data: [],
};

function Test(state = defaultState, action) {
  switch (action.type) {
    case GETTRACKJSON:
      const newData = {
        ...state,
        data: action.data,
      };
      return newData;
    default:
      return state;
  }
}

export default Test;
