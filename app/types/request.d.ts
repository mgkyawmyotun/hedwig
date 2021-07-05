export type bodyOptionType = [string, string | File][];
export type headerOptionType = [string, string][];
export type ReqeustOptions = {
  headers: React.MutableRefObject<headerOptionType>;
  body: React.MutableRefObject<bodyOptionType>;
};
type ParamType = [[string, string]];
export type ParamsType = React.MutableRefObject<ParamType>;
