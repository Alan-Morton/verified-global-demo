import { useEffect, useState } from "react";

//impliment useEffect & userState in react with typescript
import styled from "styled-components";

//import typescript Team interface
import { ITeam } from "../../vg-react-app/interfaces/team";
import { IPlayer } from "../interfaces/player";
import { IPlayerTD } from "../interfaces/playerTd";

// import components
import Panel from "../src/components/Panel";
import TableHeader from "../src/components/TableHeader";
import PlayerRow from "../src/components/TableRow";

import "./App.css";

const VGdemo: React.FC = () => {
  const [homeTeam, setHomeTeam] = useState<ITeam>();
  const [awayTeam, setAwayTeam] = useState<ITeam>();

  const fakeHome = {
    TeamName: "Washington Huskies",
    PointsScoredPerGame: 37.6,
    NetPassingYardsPerGame: 350,
    RushingYardsPerGame: 123.6,
    PassingPlayer: {
      PlayerName: "JJ McCarthy",
      Line: "O/U 199.5",
      YardsPerGame: 203.6,
      MetricPerGame: 1.6,
      vlauesLFG: ["221(3)", "147(0)", "148(1)", "141(0)", "60(0)"],
    },
    RushingPlayer: [
      {
        PlayerName: "Blake Corum",
        Line: "103.5",
        YardsPerGame: 79.4,
        MetricPerGame: 16.9,
        vlauesLFG: ["89(19)", "52(16)", "88(22)", "94(28)", "145(26)"],
      },
      {
        PlayerName: "Donovan Edwards",
        Line: "31.5",
        YardsPerGame: 16.9,
        MetricPerGame: 8.1,
        vlauesLFG: ["11(4)", "28(4)", "31(10)", "39(11)", "52(10)"],
      },
    ],
    ReceivingPlayer: [
      {
        PlayerName: "Roman Wilson",
        Line: "O/U 48.5",
        YardsPerGame: 56.5,
        MetricPerGame: 3.5,
        vlauesLFG: ["73(4)", "14(1)", "36(3)", "23(1)", "143(9)"],
      },
      {
        PlayerName: "Cornelius Johnson",
        Line: "O/U 39.5",
        YardsPerGame: 44.5,
        MetricPerGame: 3.4,
        vlauesLFG: ["12(2)", "64(9)", "33(4)", "24(3)", "24(2)"],
      },
      {
        PlayerName: "Colston Loveland",
        Line: "O/U 35.5",
        YardsPerGame: 41.8,
        MetricPerGame: 3,
        vlauesLFG: ["13(2)", "22(3)", "88(5)", "36(3)", "7(2)"],
      },
      {
        PlayerName: "Donovan Edwards",
        Line: "O/U 14.5",
        YardsPerGame: 17.8,
        MetricPerGame: 2.1,
        vlauesLFG: ["0(0)", "19(4)", "5(2)", "0(0)", "0(0)"],
      },
    ],
    TouchDownsPlayer: [
      {
        PlayerName: "Blake Corum",
        ATDOdds: "-400",
        RushingTD: 25,
        ReceivingTD: 1,
        TouchdownLFG: [1, 2, 2, 2, 2],
      },
      {
        PlayerName: "Roman Wilson",
        ATDOdds: "+182",
        RushingTD: 0,
        ReceivingTD: 12,
        TouchdownLFG: [1, 0, 1, 0, 0],
      },
      {
        PlayerName: "Colston Loveland",
        ATDOdds: "+245",
        RushingTD: 0,
        ReceivingTD: 4,
        TouchdownLFG: [0, 0, 0, 0, 0],
      },
    ],
  };

  const fakeAway = {
    TeamName: "Michigan Wolverines",
    PointsScoredPerGame: 36,
    NetPassingYardsPerGame: 218.9,
    RushingYardsPerGame: 159.5,
    PassingPlayer: {
      PlayerName: "Michael Penix Jr",
      Line: "O/U 292.5",
      YardsPerGame: 332,
      MetricPerGame: 2.5,
      vlauesLFG: ["430(2)", "319(1)", "204(2)", "162(2)", "332(2)"],
    },
    RushingPlayer: [
      {
        PlayerName: "Dillon Johnson",
        Line: "37.5",
        YardsPerGame: 89.4,
        MetricPerGame: 17.1,
        vlauesLFG: ["49(21)", "152(28)", "82(21)", "89(16)", "104(23)"],
      },
      {
        PlayerName: "Tybo Rogers",
        Line: "19.5",
        YardsPerGame: 18.2,
        MetricPerGame: 4.3,
        vlauesLFG: ["19(5)", "14(3)", "1(1)", "24(2)", "21(5)"],
      },
    ],
    ReceivingPlayer: [
      {
        PlayerName: "Rome Odunze",
        Line: "O/U 89.5",
        YardsPerGame: 110.9,
        MetricPerGame: 6.2,
        vlauesLFG: ["125(6)", "102(8)", "120(7)", "106(7)", "111(3)"],
      },
      {
        PlayerName: "Ja'Lynn Polk",
        Line: "O/U 48.5",
        YardsPerGame: 93.5,
        MetricPerGame: 6.5,
        vlauesLFG: ["122(5)", "57(5)", "55(4)", "52(5)", "148(5)"],
      },
      {
        PlayerName: "Jalen McMilan",
        Line: "O/U 59.5",
        YardsPerGame: 87.7,
        MetricPerGame: 6.5,
        vlauesLFG: ["58(5)", "131(9)", "26(5)", "96(4)", "120(8)"],
      },
      {
        PlayerName: "Jack Westover",
        Line: "O/U 26.5",
        YardsPerGame: 27.9,
        MetricPerGame: 2.9,
        vlauesLFG: ["59(6)", "4(1)", "25(2)", "43(4)", "64(7)"],
      },
    ],
    TouchDownsPlayer: [
      {
        PlayerName: "Dillon Johnson",
        ATDOdds: "-110",
        RushingTD: 16,
        ReceivingTD: 0,
        TouchdownLFG: [2, 2, 1, 0, 1],
      },
      {
        PlayerName: "Rome Odunze",
        ATDOdds: "-113",
        RushingTD: 1,
        ReceivingTD: 13,
        TouchdownLFG: [0, 0, 2, 2, 2],
      },
      {
        PlayerName: "Ja'Lynn Polk",
        ATDOdds: "+215",
        RushingTD: 1,
        ReceivingTD: 9,
        TouchdownLFG: [1, 0, 0, 1, 2],
      },
    ],
  };

  useEffect(() => {
    setAwayTeam(fakeHome);
    setHomeTeam(fakeAway);
  });

  const RushingPlayerListAway = () => {
    return awayTeam?.RushingPlayer?.map((item: IPlayer) => (
      <PlayerRow
        name={item.PlayerName}
        valueA={item.Line}
        valueB={item.YardsPerGame}
        valueC={item.MetricPerGame}
        lfgValues={item.vlauesLFG}
      ></PlayerRow>
    ));
  };

  const ReceivingListAway = () => {
    return awayTeam?.ReceivingPlayer?.map((item: IPlayer) => (
      <PlayerRow
        name={item.PlayerName}
        valueA={item.Line}
        valueB={item.YardsPerGame}
        valueC={item.MetricPerGame}
        lfgValues={item.vlauesLFG}
      ></PlayerRow>
    ));
  };

  const TouchdownsListAway = () => {
    return awayTeam?.TouchDownsPlayer?.map((item: IPlayerTD) => (
      <PlayerRow
        name={item.PlayerName}
        valueA={item.ATDOdds}
        valueB={item.RushingTD}
        valueC={item.ReceivingTD}
        lfgValues={item.TouchdownLFG}
      ></PlayerRow>
    ));
  };

  const RushingPlayerListHome = () => {
    return homeTeam?.RushingPlayer?.map((item: IPlayer) => (
      <PlayerRow
        name={item.PlayerName}
        valueA={item.Line}
        valueB={item.YardsPerGame}
        valueC={item.MetricPerGame}
        lfgValues={item.vlauesLFG}
      ></PlayerRow>
    ));
  };

  const ReceivingListHome = () => {
    return homeTeam?.ReceivingPlayer?.map((item: IPlayer) => (
      <PlayerRow
        name={item.PlayerName}
        valueA={item.Line}
        valueB={item.YardsPerGame}
        valueC={item.MetricPerGame}
        lfgValues={item.vlauesLFG}
      ></PlayerRow>
    ));
  };

  const TouchdownsListHome = () => {
    return homeTeam?.TouchDownsPlayer?.map((item: IPlayerTD) => (
      <PlayerRow
        name={item.PlayerName}
        valueA={item.ATDOdds}
        valueB={item.RushingTD}
        valueC={item.ReceivingTD}
        lfgValues={item.TouchdownLFG}
      ></PlayerRow>
    ));
  };

  return (
    <>
      <h1>AM x VG</h1>
      <BoxLayout>
        <HeaderContainerA>{awayTeam?.TeamName}</HeaderContainerA>
        <HeaderContainerH>{homeTeam?.TeamName}</HeaderContainerH>
        <SideWrapper>
          <Panel
            col={1}
            row={1}
            width={3}
            height={3}
            lable={"Points Scored Per Game"}
            value={awayTeam?.PointsScoredPerGame}
          />
          <Panel
            col={1}
            row={1}
            width={3}
            height={3}
            lable={"Net Passing Yards Per Game"}
            value={awayTeam?.NetPassingYardsPerGame}
          />
          <Panel
            col={1}
            row={1}
            width={3}
            height={3}
            lable={"Rushing Yards Per Game"}
            value={awayTeam?.RushingYardsPerGame}
          />
        </SideWrapper>
        <Midsec>
          <img width="116px" src="../src/assets/CodyBrownBets.jpg"></img>
        </Midsec>
        <SideWrapper>
          <Panel
            col={1}
            row={1}
            width={3}
            height={3}
            lable={"Points Scored Per Game"}
            value={homeTeam?.PointsScoredPerGame}
          />
          <Panel
            col={1}
            row={1}
            width={3}
            height={3}
            lable={"Net Passing Yards Per Game"}
            value={homeTeam?.NetPassingYardsPerGame}
          />
          <Panel
            col={1}
            row={1}
            width={3}
            height={3}
            lable={"Rushing Yards Per Game"}
            value={homeTeam?.RushingYardsPerGame}
          />
        </SideWrapper>
        <HeaderContainerA>Passing</HeaderContainerA>
        <HeaderContainerH>Passing</HeaderContainerH>
        <StatsSection>
          <TableHeader
            headerA="Player"
            headerB="Line"
            headerC="Yards"
            headerD="TDs / Game"
            headerE="Yards(TDs) Last 5 games"
          />
          <PlayerRow
            name={awayTeam?.PassingPlayer.PlayerName}
            valueA={awayTeam?.PassingPlayer.Line}
            valueB={awayTeam?.PassingPlayer.YardsPerGame}
            valueC={awayTeam?.PassingPlayer.MetricPerGame}
            lfgValues={awayTeam?.PassingPlayer.vlauesLFG}
          ></PlayerRow>
        </StatsSection>
        <StatsSection>
          <TableHeader
            headerA="Player"
            headerB="Line"
            headerC="Yards"
            headerD="TDs / Game"
            headerE="Yards(TDs) Last 5 games"
          />
          <PlayerRow
            name={homeTeam?.PassingPlayer.PlayerName}
            valueA={homeTeam?.PassingPlayer.Line}
            valueB={homeTeam?.PassingPlayer.YardsPerGame}
            valueC={homeTeam?.PassingPlayer.MetricPerGame}
            lfgValues={homeTeam?.PassingPlayer.vlauesLFG}
          ></PlayerRow>
        </StatsSection>
        <HeaderContainerA>Rushing</HeaderContainerA>
        <HeaderContainerH>Rushing</HeaderContainerH>
        <StatsSection>
          <TableHeader
            headerA="Player"
            headerB="Line"
            headerC="Yards"
            headerD="Attempts"
            headerE="Yards(Attempts) Last 5 Games"
          ></TableHeader>
          {RushingPlayerListAway()}
        </StatsSection>
        <StatsSection>
          <TableHeader
            headerA="Player"
            headerB="Line"
            headerC="Yards"
            headerD="Attempts"
            headerE="Yards(Attempts) Last 5 Games"
          ></TableHeader>
          {RushingPlayerListHome()}
        </StatsSection>
        <HeaderContainerA>Receiving</HeaderContainerA>
        <HeaderContainerH>Receiving</HeaderContainerH>
        <StatsSection>
          <TableHeader
            headerA="Player"
            headerB="Line"
            headerC="Yards"
            headerD="Receptions"
            headerE="Yards (Resceptions) Last 5 Games"
          ></TableHeader>
          {ReceivingListAway()}
        </StatsSection>
        <StatsSection>
          <TableHeader
            headerA="Player"
            headerB="Line"
            headerC="Yards"
            headerD="Receptions"
            headerE="Yards (Resceptions) Last 5 Games"
          ></TableHeader>
          {ReceivingListHome()}
        </StatsSection>
        <HeaderContainerA>Touchdowns</HeaderContainerA>
        <HeaderContainerH>Touchdowns</HeaderContainerH>
        <StatsSection>
          <TableHeader
            headerA="Player"
            headerB="ATD Odds"
            headerC="Rushing TDs"
            headerD="Receiving TDs"
            headerE="Touchdowns Last 5 Games"
          ></TableHeader>
          {TouchdownsListAway()}
        </StatsSection>
        <StatsSection>
          <TableHeader
            headerA="Player"
            headerB="ATD Odds"
            headerC="Rushing TDs"
            headerD="Receiving TDs"
            headerE="Touchdowns Last 5 Games"
          ></TableHeader>
          {TouchdownsListHome()}
        </StatsSection>
      </BoxLayout>
      <Footer>
        <p>
          <a href="https://twitter.com/CodyBrownBets">@CodyBrownBets</a>
        </p>
        <p>Last Five' stats are shown left to right | 21+ gamble responsibly</p>
      </Footer>
    </>
  );
};

export const StatsSection = styled.div`
  width: 50%;
  float: right;
`;

export const SideWrapper = styled.div`
  margin-bottom: 1px;
  float: left;
  width: 33.3%;
`;

export const Midsec = styled.div`
  width: 32.7%;
  float: left;
  background-color: #c6afa7;
  border-left: 1px black solid;
  border-right: 1px black solid;
  > img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;

export const BoxLayout = styled.div`
  margin-bottom: 20px;
  width: 1900px;
`;

export const HeaderContainerA = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  margin: 1px;
  float: left;
  border: 1px white solid;
  width: 47.5%;
  background-color: #341e75;
  color: white;
  font-weight: bold;
`;

export const HeaderContainerH = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  margin: 1px;
  float: left;
  border: 1px white solid;
  width: 47.5%;
  background-color: #feb513;
  color: black;
  font-weight: bold;
`;

export const Footer = styled.div`
  background-color: #efefef;
  > p {
    color: black;
    font-weight: bold;
    list-style: none;
    line-height: 40px;
    border-bottom: 2px solid black;
  }
  margin-top: 4px;
  float: left;
  width: 99.5%;
  height: 110px;
  border-bottom: 1px solid black;
`;
export default VGdemo;
