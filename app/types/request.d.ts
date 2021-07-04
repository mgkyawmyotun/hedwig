export type ReqeustOptions = {
  headers: [string, string][];
  body: [string, string | File][];
};
type ParamType = { [key: string]: string };
export type ParamsType = [ParamType];
