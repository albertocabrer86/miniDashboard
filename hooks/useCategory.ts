import { useContext } from 'react';
import { CategoryContext } from '../context/CategoryContext';
import { CategoryContextDto } from '../dto/CategoryContext.dto';

//Hook para devolver el contexto con los valores de las categorias
export const useCategory = (): CategoryContextDto => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("useCategory debe usarse dentro de un CategoryProvider");
  }

  return context;
};