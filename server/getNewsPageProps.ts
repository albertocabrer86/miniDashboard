import { GetServerSideProps } from "next";
import { getNews } from "../helpers/getNews";
import { NewsCategory } from "../dto/NewsCategory";
import { HomePagePropsDto } from '../dto/HomePageProps.dto';

export const getNewsPageProps: GetServerSideProps<HomePagePropsDto> = async (context) => {
  const raw = context.query.category as string;
  
  const validCategories: readonly NewsCategory[] = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology"
  ];

  const category = validCategories.includes(raw as NewsCategory)
    ? (raw as NewsCategory)
    : undefined;

  const news = await getNews({ category });

  return {
    props: {
      news,
      category: category || "",
    },
  };
};