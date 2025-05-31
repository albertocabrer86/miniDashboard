import { NewsItemDto } from './NewsItem.dto';

export type NewsListPropsDto = {
  news: NewsItemDto[]; 
  onLoadMore?: () => void; 
};