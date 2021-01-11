import React from "react";
import { Dropdown, InputGroup, FormControl } from "react-bootstrap";
import s from "../../styles.module.scss";

const FilterComponent = ({ changeBeer }) => {
  return (
    <div className={s.containerFilters}>
      <div className={s.containerSearch}>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => changeBeer("beer_name", e.target.value)}
          />
        </InputGroup>
      </div>
      <div className={s.boxDropdown}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            All Beers
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => changeBeer("beer_name", "IPA")}>
              IPA
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeBeer("beer_name", "PORTER")}>
              PORTER
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeBeer("beer_name", "HONEY")}>
              HONEY
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeBeer("beer_name", "")}>
              All Beers
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default FilterComponent;
