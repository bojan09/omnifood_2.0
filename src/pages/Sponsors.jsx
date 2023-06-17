import React from "react";

// assets
import sponsor_1 from "../assets/social-proof/business-insider.png";
import sponsor_2 from "../assets/social-proof/forbes.png";
import sponsor_3 from "../assets/social-proof/techcrunch.png";
import sponsor_4 from "../assets/social-proof/the-new-york-times.png";
import sponsor_5 from "../assets/social-proof/usa-today.png";

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      sponsor: sponsor_1,
    },
    {
      id: 2,
      sponsor: sponsor_2,
    },
    {
      id: 3,
      sponsor: sponsor_3,
    },
    {
      id: 4,
      sponsor: sponsor_4,
    },
    {
      id: 5,
      sponsor: sponsor_5,
    },
  ];
  return (
    <div id="sponsors" className="pt-[2rem] pb-[3rem]">
      <h1 className="uppercase text-slate-400 text-center md:py-[3.5rem] pb-5 md:text-3xl">
        As featured in
      </h1>

      <div className="md:w-[80vw] mx-auto flex items-center justify-center md:gap-[3rem] border-b-[1px] pb-6 mx-2">
        {sponsors.map((sponsor) => (
          <img
            key={sponsor.id}
            src={sponsor.sponsor}
            alt="sponsor"
            className="xs:w-[18%] md:w-[12%] h-full px-2 sponsors_img_filter"
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
