import React, { useEffect, useReducer } from "react";
import axios from "../../config/index";
import { reducer, initialState } from "./reducer/index";
import type from "./reducer/constans";
import Wrapper from "../../components/Wrapper/wrapper";
import Filters from "./components/filters/index";
import Beers from "./components/beers/index";

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("adn meli");
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
    console.log(e, "esto e");
    let response = { [e.target.name]: e.target.value };

    dispatch({
      type: type.SELECT_FILTERS,
      payload: response,
    });
  };

  console.log(state, "esto es state");

  return (
    <Wrapper>
      <Filters />
      <Beers
        beers={state.beers}
        page={state.queryParams.page}
        per_page={state.queryParams.per_page}
        selectedFilters={selectedFilters}
      />
    </Wrapper>
  );
};

export default Home;
