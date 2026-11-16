import './globals.css';

export const metadata = {
  title: '나의 책장',
  description: '읽은 책과 읽고 싶은 책을 모아 두는 나만의 책장',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
