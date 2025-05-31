import { GetStaticProps, GetStaticPaths } from 'next';
import { getNews } from '../helpers/getNews';
import { getNewsBySlug } from '../helpers/getNewsBySlug';
import { NewsDetailPageDto } from '../dto/NewsDetailPage.dto';

type Params = {
  slug: string;
};

export const getNewsDetailPaths: GetStaticPaths = async () => {
  const articles = await getNews(); // categoría por defecto: general

  const paths = articles
    .filter((article) => typeof article.slug === "string" && article.slug.length > 0)
    .slice(0, 5) // solo las primeras 5
    .map((article) => ({
      params: { slug: article.slug },
    }));

  return {
    paths,
    fallback: true,
  };
};

export const getNewsDetailProps: GetStaticProps<NewsDetailPageDto, Params > = async ({ params }) => {
  const slug = params?.slug as string;

  if (!slug) {
    console.warn("Slug no proporcionado en params.");
    return { notFound: true };
  }

  const article = await getNewsBySlug(slug);

  if (!article) {
    console.warn(`Artículo no encontrado para slug: ${slug}`);
    return { notFound: true };
  }

  return {
    props: { article },
    revalidate: 3600, // 1 hora
  };
};