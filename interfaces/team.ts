import { IPlayer } from "../interfaces/player";
import { IPlayerTD } from "../interfaces/playerTd";

export interface ITeam {
  TeamName: string;
  PointsScoredPerGame: number;
  NetPassingYardsPerGame: number;
  RushingYardsPerGame: number;
  PassingPlayer: IPlayer;
  RushingPlayer: IPlayer[];
  ReceivingPlayer: IPlayer[];
  TouchDownsPlayer: IPlayerTD[];
}
