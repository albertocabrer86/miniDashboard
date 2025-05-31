import { NewsItemDto } from '../dto/NewsItem.dto';
import { GetNewsOptionsDto } from '../dto/GetNewsOptions.dto';
import { RawArticle } from '../dto/RawArticle.dto';
import { slugify } from './slugify';

const newsCache = new Map<string, NewsItemDto[]>();

export async function getNews(options: GetNewsOptionsDto = {}): Promise<NewsItemDto[]> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const country = 'us';    
    const categoryKey = options.category || "general";
    
    if (!baseUrl || !apiKey) {
        console.error("Las variables de entorno no están definidas");
        return [];
    }

    if (newsCache.has(categoryKey)) {
        return newsCache.get(categoryKey)!;
    }

    const params = new URLSearchParams({
        country,
        apiKey,
        ...(options.category ? { category: options.category } : {}),
    });

    const url = `${baseUrl}/top-headlines?${params.toString()}`;
   
    try {
        const response = await fetch(url, { cache: 'no-store' });

        if (!response.ok) {
            throw new Error(`Error al obtener noticias: ${response.status}`);
        }

        const { articles = [] }: { articles: RawArticle[] } = await response.json();      

        const formattedArticles: NewsItemDto[] = articles
            .filter(
                (article) => article.title?.trim()
            )
            .map(({ title = '', description, url, urlToImage, publishedAt, source, author, content }) => {
                const sourceName = source?.name?.trim() || 'Fuente desconocida';
                const slugText = `${title}-${sourceName}`;
                return {
                    slug: slugify(slugText),
                    title,
                    description,
                    url,
                    urlToImage,
                    publishedAt,
                    sourceName,
                    author: author ?? null,
                    content: content ,
                };
            });

        /**Guardar en caché
         * Para evitar múltiples llamadas a la API me permite solo 50 peticiones en 12 horas
         */
        newsCache.set(categoryKey, formattedArticles);

        return formattedArticles;
    } catch (error) {
        console.error("fetchNews error:", error);
        return [];
    }
}