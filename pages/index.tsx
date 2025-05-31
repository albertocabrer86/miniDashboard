import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import '../styles/app.css';
import CategoryFilter from '../components/CategoryFilter';
import NewsList from '../components/NewsList';
import { useCategory } from '../context/CategoryContext';
import { NewsItemDto } from '../dto/NewsItem.dto';
import { NewsCategories } from '../dto/NewsCategory';
import { getNews } from '../helpers/getNews';

const getCategoryLabel = (value: string): string => {
  return NewsCategories.find(cat => cat.value === value)?.label || value;
};

const initialCount = 10;
const loadStep = 10;

const HomePage: NextPage = () => {
    const { category } = useCategory();
    const [news, setNews] = useState<NewsItemDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(initialCount);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const data = await getNews({ category });
                setNews(data);
                setVisibleCount(loadStep); 
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category]);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + loadStep);
    };

    const visibleNews = news.slice(0, visibleCount);
    const showLoadMore = visibleCount < news.length;

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
                        onLoadMore={ showLoadMore ? handleLoadMore : undefined} 
                    />                        
                    
                }
            </div>
        </main>
    );
};

export default HomePage;