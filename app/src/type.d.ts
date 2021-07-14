/** need to improve */
// type RequestItemType = 'name' | 'method' | 'options' | 'url' | 'params';

type URLType = string;
type ParamType = [string, string];
type BodyType = [string, string];
type HeaderType = [string, string];
type HeaderOptionsType = HeaderType[];
type BodyOptionsType = BodyType[];

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
  body: BodyOptionsType;
  headers: HeaderOptionsType;
};
