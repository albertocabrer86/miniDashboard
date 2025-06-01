import { NextPage } from 'next';
import '../styles/app.css';
import CategoryFilter from '../components/CategoryFilter';
import NewsList from '../components/NewsList';
import { NewsCategories } from '../dto/NewsCategory';
import { useNews } from '../hooks/useNews';
import { useCategory } from '../hooks/useCategory';

const getCategoryLabel = (value: string): string => {
  return NewsCategories.find(cat => cat.value === value)?.label || value;
};

const initialCount = 10;
const loadStep = 10;

const HomePage: NextPage = () => {
    const { category } = useCategory();//Hook para obtener las cotegorias
    const { loading, visibleNews, loadMore:handleLoadMore, canLoadMore: showLoadMore } = useNews(category);

    return (
        <main className="newsList">
            <h1>Noticias - { getCategoryLabel(category)}</h1>

            <div className="newsFilter">
                <CategoryFilter />
            </div>

            <div className="newsScrollContainer">
                {loading 
                    ? <p>Cargando noticias...</p>
                    : <NewsList 
                        news={visibleNews}  
                        onLoadMore ={ showLoadMore ? handleLoadMore : undefined} 
                    />
                }
            </div>
        </main>
    );
};

export default HomePage;