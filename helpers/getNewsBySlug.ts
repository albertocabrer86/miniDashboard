import { getNews } from './getNews'; 
import { NewsItemDto } from '../dto/NewsItem.dto';
import { NewsCategories } from '../dto/NewsCategory';

export async function getNewsBySlug(slug: string): Promise<NewsItemDto | null> {
    for (const { value: category } of NewsCategories) {
        const articles = await getNews({ category });
        const match  = articles.find((item) => item.slug === slug);
        if (match ) return match;
    }

    return null;
}