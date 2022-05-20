import HeadTitle from '../commons/components/HeadTitle';

const MintPage = () => (
  <div className="flex flex-col h-full bg-banner bg-cover bg-black">
    <div className="flex flex-col h-full bg-black bg-opacity-20">
      <HeadTitle title="MINT // Somniumwave - Official Website" />

      <div className="m-auto shadow-xl">
        <button
        type='button'
            className="w-48 font-bold text-4xl bg-[#000000] bg-opacity-80 text-white p-4 rounded-2xl"
        >
          MINT
        </button>
      </div>
    </div>
  </div>
);

export default MintPage;
