import React, { useEffect, useReducer } from "react";
import axios from "../../config/index";
import { reducer, initialState } from "./reducer/index";
import type from "./reducer/constans";
import Wrapper from "../../components/Wrapper/wrapper";
import Filters from "./components/filters/index";

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchBeers();
  }, [state.queryParams]);

  const fetchBeers = async () => {
    const response = await axios.get(
      `?page=${state.queryParams.page}&per_page=${state.queryParams.per_page}`
    );

    dispatch({
      type: type.FETCH_BEERS,
      payload: response.data,
    });
  };

  const selectedFilters = (e) => {
    let response = { [e.target.name]: e.target.value };

    dispatch({
      type: type.SELECT_FILTERS,
      payload: response,
    });
  };

  return (
    <Wrapper>
      <Filters />
    </Wrapper>
  );
};

export default Home;
