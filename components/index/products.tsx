import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import ProductCard from './productCard';

function Products() {
  return (
    <section>
      <div className="px-6 mx-auto mb-48 max-w-7xl md:px-8">
        <div className="flex flex-col justify-between md:flex-row">
          {/* left */}
          <div className="flex flex-col md:w-1/2 md:pr-20">
            {/* titles */}
            <div>
              <p className="text-2xl mb-11 font-jost md:text-5xl lg:text-6xl">
                DD Car Detailing <br /> Emphasizes Services
              </p>
              <p className="hidden mb-6 text-lg font-poppins md:block lg:text-xl">
                As premier mobile car detailers in Geelong, we cater to diverse
                budgets and needs with our customized services. Choose from our
                predefined packages or create a tailored bundle to suit your
                specific requirements. Our greatest joy comes from witnessing
                the delight on our clients faces as they behold their
                meticulously detailed vehicles. No matter the make or model,
                rest assured that we treat your car as if it were our own.
              </p>
              <p className="hidden mb-11 font-poppins md:text-lg lg:block lg:text-xl">
                We take pride in delivering a range of services that transform
                your vehicle into a pristine masterpiece. From exterior shine to
                interior freshness, our meticulous approach ensures that your
                car looks and feels its best. Our dedication to quality and
                customer satisfaction is what sets us apart as one of Geelongs
                top choices for mobile car detailing.
              </p>
            </div>
            {/* button */}
            {/* <div className="">
              <Link href="">
                <button className="hidden px-16 py-3 font-semibold transition-all duration-300 ease-in-out border-2 cursor-pointer rounded-xl border-gray-100/80 bg-white/20 bg-opacity-80 bg-clip-padding font-jost backdrop-blur-sm backdrop-filter hover:border-white lg:block">
                  See More
                </button>
              </Link>
            </div> */}
          </div>

          {/* right */}
          <div className="-mt-4 flex max-h-[820px] flex-col justify-between overflow-auto p-4 scrollbar-hide">
            <ProductCard image="https://plus.unsplash.com/premium_photo-1682142558899-772a05c63a3e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProductCard image="https://plus.unsplash.com/premium_photo-1682142558899-772a05c63a3e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProductCard image="https://plus.unsplash.com/premium_photo-1682142558899-772a05c63a3e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
