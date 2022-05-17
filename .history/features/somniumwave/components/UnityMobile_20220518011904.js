import React from 'react';
import Head from 'next/head';

const UnityMobile = () => (
  <div className="flex flex-col absolute w-full h-full bg-black">
    <Head>
      <title>Somniumwave - Official Websites</title>
      <meta name="keywords" content="somniumwave" />
    </Head>

    <div className="z-10 m-auto">
      <div className="flex flex-col text-white">
        You need to be on Desktop for this.
      </div>
    </div>
  </div>
);

export default UnityMobile;
