import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import data from "../data";

function Deneme() {
const [flip, setFlip] = useState<{[key: number]: boolean}>([false, false, false, false, false, false]);
const handleFlip = (index: number) => {
  const newFlip = {...flip};
  newFlip[index] = !newFlip[index];
  setFlip(newFlip);
};
console.log(flip)
return (
  <div className="flex flex-wrap  gap-4 items-center justify-center">
    {data.map((item, i) => (
      <ReactCardFlip key={i} isFlipped={flip[i]} flipDirection="horizontal">
        <div
          className="lg:w-[30vw] md:w-[300px] w-[500px]   h-60 bg-white-500 text-center text-white font-bold py-2 px-4 rounded shadow-lg transition duration-2000 ease-in-out"
          onClick={() => handleFlip(i)}
        >
          <div className="relative flex items-center justify-center gap-4 transition duration-4000 ease-in-out flex-col text-[#1D335A]">
            {item.image}
            <h5> {item?.title}</h5>
            {item.desc}
            {item?.title && (
              <a href="#" className="border-b">
                visit
              </a>
            )}
          </div>
        </div>
        <div
          className="lg:w-[30vw] md:w-[300px] w-[500px] h-60 bg-[#1D335A] text-center text-white font-bold py-2 px-4 rounded shadow-lg transition duration-2000 ease-in-out"
          onClick={() => handleFlip(i)}
        >
          <div className="relative flex items-center justify-center flex-col gap-4 text-white">
            {flip[`${i}`] ? item?.image1 : item?.image}
            <h5> {item?.title}</h5>
            {i === 5 ? item?.desc1 : item.desc}
            {item?.title && (
              <a href="#" className="border-b">
                visit
              </a>
            )}
          </div>
        </div>
      </ReactCardFlip>
    ))}
  </div>
);
    }

    export default Deneme;