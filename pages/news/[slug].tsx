import { useRouter } from 'next/router';
import Image from 'next/image';
import { getNewsDetailPaths, getNewsDetailProps } from '../../server/getNewsDetailPageProps';
import { NewsDetailPageDto } from '../../dto/NewsDetailPage.dto';
// Importamos la función isImageAllowed para validar las imágenes
import { isImageAllowed } from '../../helpers/isImageAllowed';

const NewsDetailPage = ({ article }: NewsDetailPageDto) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p style={{ padding: "2rem", fontFamily: "sans-serif" }}>Cargando...</p>;
  }

  const { title, author, publishedAt, urlToImage, content} = article;

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <button
        onClick={() => router.back()}
        className="button"
      >
        ← Home
      </button>

      <h1>{ title }</h1>

      <p><strong>Autor:</strong> { author || "Desconocido"}</p>
      <p><strong>Publicado:</strong> {new Date( publishedAt).toLocaleString()}</p>

      {isImageAllowed(urlToImage) && (
        <Image
            src={urlToImage}
            alt={title}
            width={300}
            height={150}
            style={{ borderRadius: '8px', objectFit: 'cover' }}
        />
      )}

      <p>{ content }</p>

    </main>
  );
};

export const getStaticPaths = getNewsDetailPaths;
export const getStaticProps = getNewsDetailProps;
export default NewsDetailPage;