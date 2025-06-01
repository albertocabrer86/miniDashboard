import { createContext, useContext, useState, ReactNode } from 'react';
import { NewsCategory } from '../dto/NewsCategory';
import { CategoryContextDto } from '../dto/CategoryContext.dto';

//Crear el contexto
export const CategoryContext = createContext<CategoryContextDto | undefined>(undefined);

//Definir el FC Provider del contexto
export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<NewsCategory>("general");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};