export type AuthServiceResponse = {
  status: 200 | 400;
  body: {
    message: string;
  };
  newToken?: string;
};
