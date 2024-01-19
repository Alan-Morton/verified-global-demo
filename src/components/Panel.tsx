import React from "react";
import PanelProps from "./PanelProps";
import styled from "styled-components";

const Panel: React.FC<PanelProps> = ({
  row,
  col,
  width = 1,
  height = 1,
  lable,
  value,
}) => {
  const panelStyle = {
    gridArea: `${row} / ${col} / ${row + height} / ${col + width}`,
  };

  return (
    <section style={panelStyle}>
      <Row>
        <span>{lable}</span> <span>{value}</span>
      </Row>
    </section>
  );
};

export const Row = styled.div`
  margin: 2px;
  text-align: center;
  width: 100%;
  height: 35px;
  font-weight: bold;
  > span:nth-child(1) {
    width: 66%;
    float: left;
    height: 38px;
    background-color: #efefef;
    color: black;
    border-left: 1px white solid;
    border-right: 1px white solid;
  }
  > span:nth-child(2) {
    width: 33%;
    float: right;
    height: 38px;
    background-color: #fef2cc;
    color: black;
    border-left: 1px white solid;
    border-right: 1px white solid;
  }
`;

export default Panel;
