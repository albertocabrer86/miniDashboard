import Link from 'next/link';
import Image from 'next/image';
import React, { memo } from 'react';
import { NewsItemPropsDto } from '../dto/NewsItemProps.dto';
// Importamos la función isImageAllowed para validar las imágenes
import { isImageAllowed } from '../helpers/isImageAllowed';

const NewsItem = memo(({ title, description, publishedAt, slug, urlToImage }: NewsItemPropsDto) => (
  <li key={slug} className="newsItem">
    <div className="newsTitle">{title}</div>
    <p className="newsDescription">{description}</p>
    <p><strong>{new Date(publishedAt).toLocaleString()}</strong></p>

    {isImageAllowed(urlToImage) && (
      <Image
        src={urlToImage}
        alt={title}
        width={150}
        height={100}
        style={{ borderRadius: '8px', objectFit: 'cover' }}
        loading="lazy"
      />
    )}

    <p>
      <Link href={`/news/${slug}`}>
        Leer más
      </Link>
    </p>
  </li>
));

export default memo(NewsItem);