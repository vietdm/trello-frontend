import {TApiSuccessResponse} from "@/@types/api-success-response";
import {TUser} from "@/@types/user";

export type TBoard = {
  id: number;
  uuid: string;
  title: string;
  description: string;
  created_at: string;
  user: TUser;
}

export type TBoards = Array<TBoard>;

export type TBoardsQuery = TApiSuccessResponse<{boards: TBoards}>;
export type TBoardQuery = TApiSuccessResponse<{board: TBoard}>;
