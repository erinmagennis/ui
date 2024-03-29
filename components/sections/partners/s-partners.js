import Image from "next/image";

import { getAllPartners } from "../../../DATA-partners";

function PartnerLogoSection() {
  const partners = getAllPartners();

  return (
    <section id="partners">
      <div className="lg:p-4 p-2">
        <div className="lg:w-2/4 h-[70%] flex  flex-col justify-between ">
          <h2 className="lg:text-4xl text-2xl pb-10">In Participation with</h2>
        </div>
      </div>
      <ul>
        <div className="flex flex-wrap items-center justify-center">
          {partners.map((partner) => (
            <li
              className="mr-20 hover:scale-105 duration-100 my-20"
              key={partner.id}
            >
              <a href={partner.Link} target="_blank" rel={"noreferrer"}>
                <div className=" w-36 flex items-center justify-center">
                  <div className="relative grayscale hover:grayscale-0">
                    <img src={partner.image} layout="fill" objectFit="cover" />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </div>
      </ul>
    </section>
  );
}

export default PartnerLogoSection;
