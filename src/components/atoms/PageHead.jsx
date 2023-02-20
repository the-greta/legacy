import Head from "next/head";
import React from "react";

const PageHead = () => {
  return (
    <Head>
      <title>한 단계 높은 데이터 솔루션 | GRETA</title>
      <link rel="canonical" href="https://the-greta.com" />
      <meta name="description" content="주식회사 GRETA 홈페이지입니다." />
      <meta
        name="keywords"
        content="그레타,greta,data,bigdata,데이터,솔루션,빅데이터,데이터분석,크롤링,데이터전처리,EDA,재현데이터,합성데이터,재현,합성,데이터플랫폼,시각화,데이터베이스,통계,통계학,통계모델,모델링,통계모형,베이지안,컨설팅"
      />
      <meta name="author" content="주식회사 GRETA" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      <meta property="og:title" content="한 단계 높은 데이터 솔루션 | GRETA" />
      <meta
        property="og:description"
        content="주식회사 GRETA 홈페이지입니다."
      />
      <meta
        property="og:image"
        content="https://the-greta.com/images/LOGO_CIRCLE.png"
      />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="800" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content="한 단계 높은 데이터 솔루션" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://the-greta.com" />
      <meta
        name="naver-site-verification"
        content="435540f1a0201579caf9dda6de2f3d150c9b00ea"
      />
    </Head>
  );
};

export default PageHead;
