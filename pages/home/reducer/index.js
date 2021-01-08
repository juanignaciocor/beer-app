import types from "./constans";

const initialState = {
  beers: [],
  queryParams: {
    page: 1,
    per_page: 12,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BEERS: {
      return { ...state, beers: action.payload };
    }
    case types.SELECT_FILTERS: {
      return { ...state, ...state.queryParams, ...action.payload };
    }
    default:
      return state;
  }
};

export { reducer, initialState };
