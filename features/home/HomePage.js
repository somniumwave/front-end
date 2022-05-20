import Link from 'next/link';
import HeadTitle from '../commons/components/HeadTitle';

const HomePage = () => (
  <div className="flex flex-col h-screen bg-black">
    <HeadTitle title="Somniumwave - Official Website" />

    <div className="flex flex-col absolute w-full h-full bg-black bg-opacity-40 z-10" />

    <div className="flex flex-col absolute w-full h-full">
      <video autoPlay loop muted playsInline className="h-full object-cover">
        <source src="./images/ocean.mp4" type="video/mp4" />
        Your browser doesnt support this.
      </video>
    </div>

    <div className="z-10 m-auto">
      <div className="flex flex-col">
        <Link href="/som" passHref>
          <button
            type="button"
            className="w-[300px] bg-white text-white text-2xl font-bold p-4 m-2 rounded-lg wow ease-linear transition-all duration-300"
          >
            ENTER SOM
          </button>
        </Link>

        <Link href="/marketplace" passHref>
          <button
            type="button"
            className="w-[300px] bg-gray-700 text-white text-2xl font-bold p-4 m-2 rounded-lg nwow ease-linear transition-all duration-300"
          >
            MARKETPLACE
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
