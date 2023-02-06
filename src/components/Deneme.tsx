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

return (
  <div className="flex flex-wrap gap-4 items-center justify-center">
    {data.map((item, i) => (
      <ReactCardFlip key={i} isFlipped={flip[i]} flipDirection="horizontal">
        <div
          className="w-[30vw] h-60 bg-green-500 text-center text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-green-400"
          onClick={() => handleFlip(i)}
        >
          <div>
            {item.image}
            <h5> {item.title}</h5>
            <p>{item.desc}</p>
          </div>
        </div>
        <div
          className="w-[30vw] h-60 bg-blue-500 text-center text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-400"
          onClick={() => handleFlip(i)}
        >
          <div>
            {item.image}
            <h5> {item.title}</h5>
            <p>{item.desc}</p>
          </div>
        </div>
      </ReactCardFlip>
    ))}
  </div>
);
    }

    export default Deneme;