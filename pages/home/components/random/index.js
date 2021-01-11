import React from "react";
import s from "../../styles.module.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const RandomComponent = ({ randomMode }) => {
  return (
    <OverlayTrigger
      overlay={
        <Tooltip id={`tooltip-${1}`}>
          <strong>Click here to enter Random Mode</strong>.
        </Tooltip>
      }
    >
      <div className={s.randomIcon} onClick={() => randomMode()}>
        <img
          style={{ height: "40px" }}
          src="https://icon-library.com/images/beer-icon-png/beer-icon-png-2.jpg"
        ></img>
      </div>
    </OverlayTrigger>
  );
};

export default RandomComponent;
