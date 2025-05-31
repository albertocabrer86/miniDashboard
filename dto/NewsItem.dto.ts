
export type NewsItemDto = {
  slug: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  sourceName: string;
  author: string | null;
  content?: string; 
};