import React from "react";
import { Dropdown } from "react-bootstrap";
import s from "../../styles.module.scss";
const FilterComponent = () => {
  return (
    <div className={s.containerFilters}>
      <div>Puedes encontrar tu mejor birra !</div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default FilterComponent;
