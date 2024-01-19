import React from "react";
import TableRowProps from "./TableRowProps";
import styled from "styled-components";

const PlayerRow: React.FC<TableRowProps> = ({
  name,
  valueA,
  valueB,
  valueC,
  lfgValues,
}) => {
  return (
    <Player>
      <span>{name}</span>
      <span>{valueA}</span>
      <span>{valueB}</span>
      <span>{valueC}</span>

      <span>
        <ul>
          {lfgValues?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </span>
    </Player>
  );
};

export const Player = styled.div`
  display: flex;
  background-color: #fef2cc;
  color: black;
  width: 99.215%;
  font-weight: bold;
  list-style: none;
  line-height: 40px;
  height: 40px;
  margin-top: 1px;
  > span:first-child {
    width: 18%;
  }
  > span {
    width: 14%;
    //line-height: 20px;
    border-right: 1px black solid;
  }
  > span:last-child {
    width: 45%;
    border-left: 2px black solid;
    border-right: 2px black solid;
    > ul {
      display: flex;
      list-style: none;
      margin-left: -42px;
      > li:first-child {
        border-left: 0px;
      }
      > li {
        width: 20%;
        line-height: 10px;
        margin-right: 2px;
        border-left: 1px black solid;
      }
    }
  }
`;

export default PlayerRow;
