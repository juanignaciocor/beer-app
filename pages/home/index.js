import React, { useEffect, useReducer, useState } from "react";
import axios from "../../config/index";
import { reducer, initialState } from "./reducer/index";
import type from "./reducer/constans";
import Wrapper from "../../components/Wrapper/wrapper";
import Filters from "./components/filters/index";
import Beers from "./components/beers/index";
import Random from "./components/random";
import Spinner from "react-bootstrap/Spinner";
const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [reloading, setReloading] = useState(false);
  const [random, setRandom] = useState(false);
  useEffect(() => {
    fetchBeers();
  }, [state.queryParams]);

  useEffect(() => {
    randomMode();
  }, [random]);

  const fetchBeers = async () => {
    try {
      setRandom(false);
      let query = `?page=${state.queryParams.page}&per_page=${state.queryParams.per_page}`;
      if (state.queryParams.beer_name)
        query += `&beer_name=${state.queryParams.beer_name}`;
      const response = await axios.get(query);

      dispatch({
        type: type.FETCH_BEERS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err, "esto es mi error");
    }
  };

  const selectedFilters = (name, value) => {
    let response = {
      [name]: value,
    };
    dispatch({
      type: type.SELECT_FILTERS,
      payload: response,
    });
    setReloading(!reloading);
  };

  const randomMode = async () => {
    try {
      if (random) {
        const response = await axios.get("/random");

        dispatch({
          type: type.FETCH_BEERS,
          payload: response.data,
        });
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const activeRandom = () => setRandom(true);
  return (
    <Wrapper>
      <Filters changeBeer={selectedFilters} />
      <Beers
        beers={state.beers}
        page={state.queryParams.page}
        per_page={state.queryParams.per_page}
        selectedFilters={selectedFilters}
        random={random}
      />
      <Random randomMode={activeRandom}></Random>
    </Wrapper>
  );
};

export default Home;
