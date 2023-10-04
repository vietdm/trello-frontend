import {TBoardsQuery} from "@/@types/board";
import {BOARD_GET_ALL} from "@/utils/api-url";
import axiosInstance from "@/utils/axios";
import {dehydrate, DehydratedState, QueryClient, useQuery} from "react-query";

export const BOARD_GET_ALL_QK: string = 'board_get_all_query_key';

export const boardAllQuery = (): Promise<TBoardsQuery> => {
  return axiosInstance.get(BOARD_GET_ALL);
};

export const useBoardAllQuery = (): TBoardsQuery|undefined => {
  const { data } = useQuery({
    queryKey: [BOARD_GET_ALL_QK],
    queryFn: () => boardAllQuery(),
  });
  return data;
};

export const prefetchBoardAllQuery = async (): Promise<DehydratedState> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([BOARD_GET_ALL_QK], () => boardAllQuery());
  return dehydrate(queryClient);
};
