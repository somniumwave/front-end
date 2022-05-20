import React from 'react';
import HeadTitle from '../../commons/components/HeadTitle';

const UnityMobile = () => (
  <div className="flex flex-col absolute w-full h-full bg-black">
    <HeadTitle title="Somniumwave - Official Website" />

    <div className="z-10 m-auto">
      <div className="flex flex-col text-white">
        You need to be on Desktop for this.
      </div>
    </div>
  </div>
);

export default UnityMobile;
