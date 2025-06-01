import { useEffect, useMemo, useState } from 'react';
import { getNews } from '../helpers/getNews';
import { NewsItemDto } from '../dto/NewsItem.dto';
import { NewsCategory } from '../dto/NewsCategory';

const initialCount = 10;
const loadStep = 10;

export const useNews = (category: NewsCategory) =>{
    const [news, setNews] = useState<NewsItemDto[]>([]);
    const [loading, setLoading] = useState(true);//Variable para mostrar el mensaje de cargando
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

    const visibleNews = useMemo(
        () => news.slice(0, visibleCount),
        [news, visibleCount]
    );

    const loadMore = () => {
        setVisibleCount(prev => prev + loadStep);
    };    
   
    const canLoadMore = visibleCount < news.length;
    
    return {
        loading,
        visibleNews,
        loadMore,
        canLoadMore,
    };
}

