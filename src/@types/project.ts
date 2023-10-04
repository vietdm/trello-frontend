import {TApiSuccessResponse} from "@/@types/api-success-response";
import {TUser} from "@/@types/user";

export type TProject = {
  id: number;
  uuid: string;
  title: string;
  description: string;
  created_at: string;
  user: TUser;
}

export type TProjects = Array<TProject>;

export type TProjectsQuery = TApiSuccessResponse<{projects: TProjects}>;
export type TProjectQuery = TApiSuccessResponse<{projects: TProject}>;
