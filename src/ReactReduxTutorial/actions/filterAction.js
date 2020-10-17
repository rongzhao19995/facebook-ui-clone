import { FILTER_SET } from "../constants/actionType";

// action creators

function doSetFilter(filter) {
  return {
    type: FILTER_SET,
    filter,
  };
}

export { doSetFilter };
