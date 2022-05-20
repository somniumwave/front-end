import Head from 'next/head';

const HeadTitle = ({ title }) => (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content="somniumwave" />
    </Head>
  );

export default HeadTitle;
