import React from 'react';
import Marquee from 'react-fast-marquee';
import logo1 from '../../assets/brands/amazon.png';
import logo2 from '../../assets/brands/amazon_vector.png';
import logo3 from '../../assets/brands/casio.png';
import logo4 from '../../assets/brands/moonstar.png';
import logo5 from '../../assets/brands/randstad.png';
import logo6 from '../../assets/brands/start-people 1.png';
import logo7 from '../../assets/brands/start.png';
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7 ];

const ClientLogos = () => {
  return (
    <section className="py-10 bg-base-200 ">
      <h2 className="text-center text-2xl font-bold text-primary mb-6">Trusted By</h2>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        direction="left"
        className="flex gap-10"
      >
       <div className='flex gap-[100px] items-center'>
         {logos.map((logo, idx) => (
          <div key={idx} className="mx-6">
            <img
              src={logo}
              alt={`Client ${idx}`}
              className="h-5 w-auto object-contain  hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
       </div>
      </Marquee>
    </section>
  );
};

export default ClientLogos;
