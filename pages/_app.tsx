import { WalletModalProvider } from '@rentfuse-labs/neo-wallet-adapter-react-ui';
import { AppProps } from 'next/app';
import React from 'react';
import { WalletConnectionProvider } from '../components/wallet-connection-provider';
import Layout from '../components/Layout'
import '../styles/style.css'

// Use require instead of import, and order matters
require('../styles/style.css');
require('@rentfuse-labs/neo-wallet-adapter-react-ui/styles.css');

export default function _App({ Component, pageProps }: AppProps) {
	return (
		<WalletConnectionProvider>
			<WalletModalProvider>
				<Layout>
          			<Component {...pageProps} />
        		</Layout>
			</WalletModalProvider>
		</WalletConnectionProvider>
	);
}
