import Head from'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-banner bg-cover bg-black">
      <div className="flex flex-col h-full bg-black bg-opacity-20">

        <Head>
          <title>MARKETPLACE // Somniumwave - Official Website</title>
          <meta name='keywords' content='web development, programming' />
        </Head>

        <div className="m-auto shadow-xl">
          <button className="w-[400px] font-bold text-4xl bg-[#000000] bg-opacity-80 text-white p-4 rounded-2xl">
            MARKETPLACE MODULE HERE
          </button>
        </div>

      </div>
    </div>
  )
}



