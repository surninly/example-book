import BookCard from './BookCard';
import Shelf from './Shelf';

// R4. 부모가 분류한 책 배열을 받아 목록을 표시합니다.
export default function GenreSection({ label, books }) {
  return (
    <Shelf title={`${label} (${books.length})`}>
      {books.length === 0 ? (
        <p className="empty">아직 등록된 책이 없습니다.</p>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <BookCard
              key={book.id}
              emoji={book.emoji}
              title={book.title}
              author={book.author}
              pages={book.pages}
              desc={book.desc}
              rating={book.rating}
              isRead={book.isRead}
              isBest={book.isBest}
            />
          ))}
        </div>
      )}
    </Shelf>
  );
}
