export type bodyOptionType = [string, string | File][];
export type ReqeustOptions = {
  headers: [string, string][];
  body: React.MutableRefObject<bodyOptionType>;
};
type ParamType = { [key: string]: string };
export type ParamsType = [ParamType];
