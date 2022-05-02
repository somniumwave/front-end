import Head from'next/head'
import Link from 'next/link'
import Unity, { UnityContext } from "react-unity-webgl"

const unityContext = new UnityContext({
  loaderUrl: "Build/SW1.loader.js",
  dataUrl: "Build/SW1.data.unityweb",
  frameworkUrl: "Build/SW1.framework.js.unityweb",
  codeUrl: "Build/SW1.wasm.unityweb",
});

export default function Home() {
  
  return (
    <div className="flex flex-col h-full bg-black bg-banner bg-cover ">
      <div className="flex flex-col h-full bg-opacity-20">

        <Head>
          <title>ENTER // Somniumwave - Official Website</title>
          <meta name='keywords' content='web development, programming' />
        </Head>
 
        <div className="m-auto shadow-xl">
          <div className="">
            <Unity
              unityContext={unityContext}
              style={{ width: "1280px", height: "720px"}}
            />
          </div>
        </div>

      </div>
    </div>
  )
}



