export default function BookCard({
  emoji = '📘',
  title,
  author,
  pages,
  desc,
  rating = 0,
  isRead = false,
  isBest = false,
}) {
  // style 객체를 JSX의 style 속성에 전달합니다.
  const ratingStyle = { color: '#ff9800', letterSpacing: '2px' };

  return (
    <article className={isRead ? 'book-card is-read' : 'book-card'}>
      {/* 중괄호 안에서 props와 자바스크립트 표현식을 사용합니다. */}
      <div className="book-heading">
        <h3>
          {title}
          {isBest && <span className="best-badge">BEST</span>}
        </h3>
        <span className="book-emoji" aria-hidden="true">{emoji}</span>
      </div>
      <p className="book-author">{author}</p>
      <p className="book-description">{desc}</p>
      <p
        className="book-rating"
        style={ratingStyle}
        aria-label={`5점 만점에 ${rating}점`}
      >
        {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
      </p>
      <div className="book-footer">
        <span className="book-status">
          {isRead ? '✅ 다 읽음' : '📖 읽는 중'}
        </span>
        <span className="book-pages">{pages}쪽</span>
      </div>
    </article>
  );
}
