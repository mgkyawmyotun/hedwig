/** need to improve */
// type RequestItemType = 'name' | 'method' | 'options' | 'url' | 'params';

type URLType = string;
type ParamType = [string, string];
type BodyType = [string, string | File];
type HeaderType = [string, string];
type BodyOptionsType = BodyType[];
type HeaderOptionsType = HeaderType[];

type RequestOptionsType = {
  headers: HeaderOptionsType;
  body: BodyOptionsType;
};
type RequestMethodType = 'GET' | 'POST' | 'DELETE' | 'PUT';
type ParamsType = ParamType[];
type CollectionType = {
  name: string;
  items: [];
};
type CollectionsStateType = CollectionType[];

type RequestResponseStateType = {
  url: URLType;
  method: RequestMethodType;
  response: Response | undefined;
  params: ParamsType;
  options: RequestOptionsType;
};
