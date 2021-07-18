type URLType = string;
type ParamType = [string, string];
type BodyType = [string, string | File];
type HeaderType = [string, string];
type HeaderOptionsType = HeaderType[];
type BodyOptionsType = BodyType[];

type RequestMethodType = 'GET' | 'POST' | 'DELETE' | 'PUT';
type ParamsType = ParamType[];

type RequestResponseStateType = {
  url: URLType;
  method: RequestMethodType;
  response: Response | undefined;
  params: ParamsType;
  body: BodyOptionsType;
  headers: HeaderOptionsType;
};

type RequestItemType = Pick<
  RequestResponseStateType,
  'url' | 'headers' | 'method' | 'params' | 'body'
> & { name: string };

type CollectionType = {
  name: string;
  items: RequestItemType[];
};
type CollectionsStateType = CollectionType[];
