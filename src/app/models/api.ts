export interface CharactersApiResponse {
  code: string;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: Data;
  etag: string;
}

export interface Data {
  offset: string;
  limit: string;
  total: string;
  count: string;
  results: HeroesData[];
}

export interface HeroesData {
  id: string;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls: Url[];
  thumbnail: Thumbnail;
  comics: Comics;
  stories: Stories;
  events: Comics;
  series: Comics;
}

export interface Stories {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item2[];
}

export interface Item2 {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Comics {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item[];
}

export interface Item {
  resourceURI: string;
  name: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Url {
  type: string;
  url: string;
}
