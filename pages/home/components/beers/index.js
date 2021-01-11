import React, { useEffect } from "react";
import { Card, Button, Pagination } from "react-bootstrap";
import Link from "next/link";
import s from "../../styles.module.scss";
import { useRouter } from "next/router";

const Beers = ({ beers, page, per_page, selectedFilters, random }) => {
  const route = useRouter();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className={s.containerBeers}>
        {beers &&
          beers.map((beer) => {
            return (
              <Card style={{ width: "18rem" }} key={beer.id}>
                <Link href={`/singlebeer/${beer.id}`}>
                  <img className={s.cardImg} src={beer.image_url}></img>
                </Link>
                <Card.Body>
                  <Card.Title>{beer.name}</Card.Title>
                  <Card.Text>{beer.tagline}</Card.Text>
                  <Card.Text>First Brewed: {beer.first_brewed}</Card.Text>
                  <Card.Text>Abv: {beer.abv}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => route.push(`/singlebeer/${beer.id}`)}
                  >
                    Go Drink
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
      <PaginationComponent
        beers={beers}
        page={page}
        per_page={per_page}
        selectedFilters={selectedFilters}
        random={random}
      />
    </div>
  );
};

const PaginationComponent = ({
  beers,
  per_page,
  page,
  selectedFilters,
  random,
}) => {
  let size = 400 / per_page;

  return (
    <div style={{ display: !random ? "block" : "none" }}>
      <Pagination>
        {beers.map((data, number) => {
          return (
            <Pagination.Item
              key={number}
              active={number === page}
              onClick={() => selectedFilters("page", number)}
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
