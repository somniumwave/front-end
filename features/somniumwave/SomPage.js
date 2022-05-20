import { isBrowser } from 'react-device-detect';
import UnityCanvas from './components/UnityCanvas';
import UnityMobile from './components/UnityMobile';

const SomPage = () => {
  if (isBrowser) {
    return <UnityCanvas />;
  }
  return <UnityMobile />;
};

export default SomPage;
