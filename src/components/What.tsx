import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import data from "../data";
import Deneme from "./Deneme";

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
    <section className="w-full mx-auto container">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto  max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Services
              </span>
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                What We Offer
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
<Deneme/>
        
        </div>
      </div>
    </section>
  );
};

export default What;
