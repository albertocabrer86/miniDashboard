import type { AppProps } from 'next/app';
import { CategoryProvider } from '../context/CategoryContext';

function CategoryApp({ Component, pageProps }: AppProps) {
  return (
    <CategoryProvider>
      <Component {...pageProps} />
    </CategoryProvider>
  );
}

export default CategoryApp;