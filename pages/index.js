import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MMButton from '../components/wallet/MMButton'




export default function Home() {

  //RENDERED STUFF 

  return (
      <div className="flex flex-col h-screen bg-black">

          <Head>
            <title>Somniumwave - Official Website</title>
            <meta name='keywords' content='somniumwave' />
          </Head>

          <div className="flex flex-col absolute w-full h-full bg-black bg-opacity-40 z-10" />

          <div className="flex flex-col absolute w-full h-full">
            <video autoPlay loop muted playsInline className="h-full object-cover">
              <source src="./images/ocean.mp4" type="video/mp4" />Your browser doesnt support this shit
            </video>
          </div>
          <MMButton />

      </div>
  )
}

//<Link href='/settings'>SETTINGS</Link>