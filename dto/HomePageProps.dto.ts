import { NewsItemDto } from './NewsItem.dto';

export type HomePagePropsDto = {
  news: NewsItemDto[];
  category: string;
};