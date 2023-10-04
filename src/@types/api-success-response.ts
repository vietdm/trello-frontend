export type TApiSuccessResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};
