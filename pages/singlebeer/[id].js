import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Wrapper from "../../components/Wrapper/wrapper";
import Single from "./Single";

const SingleBeer = (props) => {
  const [beer, setBeer] = useState(false);

  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (!beer && id) {
      console.log(id);
      axios
        .get(`https://api.punkapi.com/v2/beers/${id}`)
        .then((res) => {
          setBeer(res.data)
          console.log(res)});
    }
  });

  return (
    <Wrapper>
      <Single displayBeer={beer} />
    </Wrapper>
  );
};

export default SingleBeer;
