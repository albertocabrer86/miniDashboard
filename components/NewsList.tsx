import React, { memo } from 'react';
import NewsItem from './NewsItem';
import { NewsListPropsDto } from '../dto/NewsListProps.dto';

const NewsList = ({ news, onLoadMore }: NewsListPropsDto) => { 
    if (!news.length) {
        return <p>No hay noticias disponibles.</p>;
    }

    return (
        <>
            <ul className="newsUl">
                {news.map(({ publishedAt, title, description, urlToImage, slug }) => (
                <NewsItem
                    key={slug}
                    title={title}
                    description={description}
                    publishedAt={publishedAt}
                    slug={slug}
                    urlToImage={urlToImage}
                />
                ))}
            </ul>

            {onLoadMore && (
                <div className="loadMoreContainer">
                    <button onClick={onLoadMore} className="button">
                        Cargar más
                    </button>
                </div>
            )}
        </>
    );
};

export default memo(NewsList);