import React from 'react'
import Unity, { UnityContext } from "react-unity-webgl"
import Head from 'next/head'

const unityContext = new UnityContext({
    loaderUrl: "Build/SW1.loader.js",
    dataUrl: "Build/SW1.data.unityweb",
    frameworkUrl: "Build/SW1.framework.js.unityweb",
    codeUrl: "Build/SW1.wasm.unityweb",
  });

function UnityCanvas() {
  return (
    <div className="flex flex-col absolute w-full h-full bg-black">
        <Head>
            <title>Somniumwave - Official Website</title>
            <meta name='keywords' content='somniumwave' />
        </Head>

    <div className="z-10 m-auto">
        <div className="flex flex-col text-white">
          You need to be on Desktop for this.
        </div>
    </div>
</div>
  )
}

export default UnityCanvas