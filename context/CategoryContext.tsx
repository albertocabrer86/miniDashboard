import { createContext, useContext, useState, ReactNode } from 'react';
import { NewsCategory } from '../dto/NewsCategory';
import { CategoryContextDto } from '../dto/CategoryContext.dto';

const CategoryContext = createContext<CategoryContextDto | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<NewsCategory>("general");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = (): CategoryContextDto => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory debe usarse dentro de un CategoryProvider");
  }
  return context;
};