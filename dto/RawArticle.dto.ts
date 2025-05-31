export type RawArticle = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    id?: string;
    name: string;
  };
  author?: string;
  content?: string;
};