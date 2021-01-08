import { React, useState, useEffect } from "react";
import axios from "../../config/index";
import { Card, Button, Collapse, ListGroup } from "react-bootstrap";
import styles from "./single.module.scss";
let fakeBeer = [
  {
    id: 192,
    name: "Punk IPA 2007 - 2010",
    tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",
    first_brewed: "04/2007",
    description:
      "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
    image_url: "https://images.punkapi.com/v2/192.png",
    abv: 6.0,
    ibu: 60.0,
    target_fg: 1010.0,
    target_og: 1056.0,
    ebc: 17.0,
    srm: 8.5,
    ph: 4.4,
    attenuation_level: 82.14,
    volume: {
      value: 20,
      unit: "liters"
    },
    boil_volume: {
      value: 25,
      unit: "liters"
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: "celsius"
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 19.0,
          unit: "celsius"
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: "Extra Pale",
          amount: {
            value: 5.3,
            unit: "kilograms"
          }
        }
      ],
      hops: [
        {
          name: "Ahtanum",
          amount: {
            value: 17.5,
            unit: "grams"
          },
          add: "start",
          attribute: "bitter"
        },
        {
          name: "Chinook",
          amount: {
            value: 15,
            unit: "grams"
          },
          add: "start",
          attribute: "bitter"
        }
      ],
      yeast: "Wyeast 1056 - American Ale™"
    },
    food_pairing: [
      "Spicy carne asada with a pico de gallo sauce",
      "Shredded chicken tacos with a mango chilli lime salsa",
      "Cheesecake with a passion fruit swirl sauce"
    ],
    brewers_tips:
      "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
    contributed_by: "Sam Mason <samjbmason>"
  }
];

const Single = () => {
  const [selectedBeer, setSelectedBeer] = useState(false);
  const [openFood, setOpenFood] = useState(false);
  const [openTips, setOpenTips] = useState(false);
  useEffect(() => {
    if (!selectedBeer) {
      setSelectedBeer(fakeBeer);
    }
  });

  return (
    <div className={styles.singleContainer}>
      {!selectedBeer ? (
        "loading"
      ) : (
        <Card className={styles.singleCard}>
          <Card.Img className={styles.cardimage} variant="top" src={selectedBeer[0].image_url} />
          <Card.Body>
            <Card.Title>{selectedBeer[0].name}</Card.Title>
            <Card.Subtitle>{selectedBeer[0].tagline}</Card.Subtitle>
            <small className="text-muted">
              First Brewed {selectedBeer[0].first_brewed}
            </small>
            <Card.Text>
              {selectedBeer[0].description}
              <br />
              <ListGroup variant="flush">
                <ListGroup.Item>
                  ABV: <strong>{selectedBeer[0].abv}%</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  IBU: <strong>{selectedBeer[0].ibu}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  PH: <strong>{selectedBeer[0].ibu}</strong>
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
            <br/>
            <Card.Subtitle
              onClick={() => setOpenFood(!openFood)}
              aria-controls="food-pairing"
              aria-expanded={openFood}
            >
              Food Pairing
            </Card.Subtitle>
            <Collapse in={openFood}>
              <div id="food-pairing">
                <ul>
                  {selectedBeer[0].food_pairing.map(food => {
                    return <li>{food}</li>;
                  })}
                </ul>
              </div>
            </Collapse>
            <br/>
            <Card.Subtitle
              onClick={() => setOpenTips(!openTips)}
              aria-controls="brewer-tips"
              aria-expanded={openTips}
            >
              Brewers Tips
            </Card.Subtitle>
            <Collapse in={openTips}>
              <div id="brewer-tips">
                <ul>{selectedBeer[0].brewers_tips}</ul>
              </div>
            </Collapse>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Contributed by: {selectedBeer[0].contributed_by}
            </small>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
};

export default Single;
