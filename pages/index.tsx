import { useWallet } from '@rentfuse-labs/neo-wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@rentfuse-labs/neo-wallet-adapter-react-ui';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'

import { useState, useCallback, useEffect } from 'react';

const Index: NextPage = () => {
	const { connected, getNetworks } = useWallet();

	const [walletNetwork, setWalletNetwork] = useState<string | null>(null);

	const fetchWalletNetwork = useCallback(async () => {
		try {
			const result = await getNetworks();
			if (result.status === 'success') {
				setWalletNetwork(result.data?.defaultNetwork || null);
			}
		} catch (error) {
			console.error(error);
		}
	}, [getNetworks]);
	useEffect(() => {
		if (connected) {
			fetchWalletNetwork();
		} else {
			setWalletNetwork(null);
		}
	}, [connected, fetchWalletNetwork]);

	console.log(walletNetwork);

	return (
		<div className="flex flex-col h-screen bg-black">

          <Head>
            <title>Somniumwave - Official Website</title>
            <meta name='keywords' content='somniumwave' />
          </Head>

          <div className="flex flex-col absolute w-full h-full bg-black bg-opacity-40 z-10" />

          <div className="flex flex-col absolute w-full h-full">
            <video autoPlay loop muted playsInline className="h-full object-cover">
              <source src="./images/ocean.mp4" type="video/mp4" />Your browser doesnt support this.
            </video>
          </div>

          <div className="z-10 m-auto">
            <div className="flex flex-col">
                <WalletMultiButton />
                <WalletDisconnectButton />
            </div>
            
          </div>
          
      </div>
	);
};

export default Index;

/* 

              <Link href='/enter' passHref>
                <button className="w-[300px] bg-white text-white text-2xl font-bold p-4 m-2 rounded-lg wow ease-linear transition-all duration-300">
                  
                  ENTER SOM
                  
                </button>
              </Link>

              <Link href='/marketplace'>  
                <button className="w-[300px] bg-gray-700 text-white text-2xl font-bold p-4 m-2 rounded-lg nwow ease-linear transition-all duration-300">
                  MARKETPLACE
                </button>
              </Link>

*/