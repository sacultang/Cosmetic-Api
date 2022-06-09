import { Html, Head, Main, NextScript } from 'next/document';
// 서버에서만 작동이 되는 페이지
export default function Document() {
  return (
    <Html lang='ko'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
