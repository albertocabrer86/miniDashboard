import { RawArticle } from './RawArticle.dto';

export type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: RawArticle[];
};