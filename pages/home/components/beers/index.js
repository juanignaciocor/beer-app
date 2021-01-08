import React, { useEffect } from "react";
import { Card, Button, Pagination } from "react-bootstrap";
import s from "../../styles.module.scss";
const Beers = ({ beers, page, per_page, selectedFilters }) => {
  console.log(beers, "esto es beers");
  return (
    <div className={s.containerBeers}>
      {beers &&
        beers.map((beer) => {
          return (
            <Card style={{ width: "18rem" }} key={beer.id}>
              <img className={s.cardImg} src={beer.image_url}></img>
              <Card.Body>
                <Card.Title>{beer.name}</Card.Title>
                <Card.Text>{beer.tagline}</Card.Text>
                <Card.Text>First Brewed: {beer.first_brewed}</Card.Text>
                <Card.Text>Abv: {beer.abv}</Card.Text>
                <Button variant="primary">Go Drink</Button>
              </Card.Body>
            </Card>
          );
        })}
      <PaginationComponent
        beers={beers}
        page={page}
        per_page={per_page}
        selectedFilters={selectedFilters}
      />
    </div>
  );
};

const PaginationComponent = ({ beers, per_page, page, selectedFilters }) => {
  let size = 400 / per_page;
  console.log(Math.trunc(size), "size");

  return (
    <div>
      <Pagination>
        {beers.map((data, number) => {
          return (
            <Pagination.Item
              key={number}
              active={number === page}
              onClick={() =>
                selectedFilters({ target: { name: "page", value: number } })
              }
            >
              {number}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
};

export default Beers;
