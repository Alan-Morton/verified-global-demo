import React from "react";
import TableHeaderProps from "./TableHeaderProps";
import styled from "styled-components";

const TableHeader: React.FC<TableHeaderProps> = ({
  headerA,
  headerB,
  headerC,
  headerD,
  headerE,
}) => {
  return (
    <Header>
      <span>{headerA}</span>
      <span>{headerB}</span>
      <span>{headerC}</span>
      <span>{headerD}</span>
      <span>{headerE}</span>
    </Header>
  );
};

export const Header = styled.div`
  header {
    width: 100%;
  }
  display: flex;
  background-color: #efefef;
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
    border-right: 1px black solid;
  }
  > span:last-child {
    width: 45%;
    border-left: 2px black solid;
    border-right: 2px black solid;
  }
`;

export default TableHeader;
