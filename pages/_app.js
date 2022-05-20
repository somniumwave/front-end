import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import Layout from '../features/commons/components/Layout';
import '../styles/style.css';

function getLibrary(provider) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen w-full">
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </div>
  );
}

export default MyApp;
