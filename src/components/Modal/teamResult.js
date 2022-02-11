import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function TeamResult({ team, cardXY, point }) {
  return (
    <div className="wrapCard">
      <p>{team}조</p>
      <SelectCard name={cardXY ? "X" : "Y"}>{cardXY ? "X" : "Y"}</SelectCard>
      <p>{point}</p>
    </div>
  );
}

const SelectCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: ${(props) => (props.name === "X" ? "#c3e8fb" : "#ffb7b7")};
  font-size: 2em;
`;

TeamResult.propTypes = {
  team: PropTypes.number.isRequired,
  cardXY: PropTypes.bool.isRequired,
  point: PropTypes.number.isRequired,
};