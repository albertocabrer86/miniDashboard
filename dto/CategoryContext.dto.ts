import { NewsCategory } from '../dto/NewsCategory';

export type CategoryContextDto = {
  category: NewsCategory;
  setCategory: (category: NewsCategory) => void;
};