import {TApiSuccessResponse} from "@/@types/api-success-response";
import {TProject} from "@/@types/project";
import {TUser} from "@/@types/user";

export type TBoard = {
  id: number;
  uuid: string;
  title: string;
  description: string;
  created_at: string;
  user: TUser;
  project: TProject
}

export type TBoards = Array<TBoard>;

export type TBoardsQuery = TApiSuccessResponse<{boards: TBoards}>;
export type TBoardQuery = TApiSuccessResponse<{board: TBoard}>;
