export interface Article {
  id: string;
  webTitle: string;
  webUrl: string;
  fields?: {
    thumbnail?: string;
  };
}
