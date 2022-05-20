import HeadTitle from '../commons/components/HeadTitle';

const MarketPlacePage = () => (
  <div className="flex flex-col h-full bg-banner bg-cover bg-black">
    <div className="flex flex-col h-full bg-black bg-opacity-20">
      <HeadTitle title="MARKETPLACE // Somniumwave - Official Website" />

      <div className="m-auto shadow-xl">
        <button
          type="button"
          className="w-[400px] font-bold text-4xl bg-[#000000] bg-opacity-80 text-white p-4 rounded-2xl"
        >
          MARKETPLACE MODULE HERE
        </button>
      </div>
    </div>
  </div>
);
export default MarketPlacePage;
