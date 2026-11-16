import books from '@/data/books';
import GenreSection from '@/components/GenreSection';

const genres = [
  { key: 'novel', label: '📖 소설' },
  { key: 'essay', label: '✍️ 에세이' },
  { key: 'it', label: '💻 IT' },
  { key: 'poem', label: '🌸 시' },
];

export default function Home() {
  // R6. filter와 length로 통계를 계산합니다. 빈 배열은 진행률 0%입니다.
  const readBooks = books.filter((book) => book.isRead);
  const progress = books.length === 0
    ? 0
    : Math.round((readBooks.length / books.length) * 100);
  const topBooks = books.filter((book) => book.rating === 5);

  return (
    <main className="bookshelf-page">
      <header className="page-header">
        <h1><span aria-hidden="true">📚</span> 나의 책장</h1>
        <div className="reading-stats" aria-label="독서 현황">
          <p className="stat">전체 <strong>{books.length}</strong>권</p>
          <p className="stat">다 읽은 책 <strong>{readBooks.length}</strong>권</p>
          <p className="stat">독서 진행률 <strong>{progress}</strong>%</p>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="독서 진행률"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        {/* 도전: 5점인 책이 있을 때만 추천 문구를 표시합니다. */}
        {topBooks.length > 0 && (
          <p className="recommendation">
            <span aria-hidden="true">⭐</span>
            <span>별점 5점 추천: {topBooks.map((book) => book.title).join(', ')}</span>
          </p>
        )}
      </header>

      {/* R5. 부모에서 장르별 filter, 자식에서 map으로 카드 표시 */}
      {genres.map((genre) => (
        <GenreSection
          key={genre.key}
          label={genre.label}
          books={books.filter((book) => book.genre === genre.key)}
        />
      ))}

      <footer className="page-footer">한 권씩 채워 가는 나만의 책장</footer>
    </main>
  );
}
