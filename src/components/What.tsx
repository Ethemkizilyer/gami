import { useState } from "react";
import Card from "./Card";

const What = () => {
  const [flip, setFlip] = useState<{ [key: number]: boolean }>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleFlip = (index: number) => {
    const newFlip = { ...flip };
    newFlip[index] = !newFlip[index];
    setFlip(newFlip);
  };

  return (
    <section className=" mx-auto -mt-24 flex flex-wrap flex-col container pb-20">
      <div className="container flex flex-col gap-20">
        <div className="w-full lg:w-1/2 flex flex-col mx-auto items-center justify-center mb-6 lg:px-2 xl:px-0 text-center">
          <p className="text-6xl  lg:text-[600] font-bold tracking-wider text-gray-900 mb-8">
            Lorem Ipsum Dolor
          </p>
          <p className="text-x tracking-wider text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            cum ullam. Est eius adipisci sed impedit eveniet. Quas, nihil nobis
            asperiores reiciendis ut quam, repudiandae deserunt aliquid ab odio
            nisi!
          </p>
        </div>
      </div>

      <Card />
    </section>
  );
};

export default What;
