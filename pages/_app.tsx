import type { AppProps } from 'next/app';
import { CategoryProvider } from '../context/CategoryContext';


/**Envolver toda tu aplicación en un contexto global
 * Permite que cualquier componente dentro de tu app acceda al contexto de categorías 
 * */
function CategoryApp({ Component, pageProps }: AppProps) {
  return (
    <CategoryProvider>
      <Component {...pageProps} />
    </CategoryProvider>
  );
}

export default CategoryApp;