import Link from 'next/link';
import React from 'react';
import CategoryCard from './categoryCard';

function Categories() {
  return (
    <section>
      <div className="px-6 mx-auto mb-48 max-w-7xl md:px-8">
        {/* top row */}
        <div className="flex justify-between mb-14 lg:mb-20">
          {/* titles */}
          <div>
            <p className="mb-3 text-2xl font-jost md:text-5xl lg:text-6xl">
              WHY DO YOU CHOOSE US
            </p>
            <p className="text-lg font-poppins lg:text-xl">
              When it comes to ceramic coat protection in Geelong and Melbourne,
              <br />
              trust the leaders. Our reputation, high-quality products, and
              well-trained team set us apart for top-tier services and peace of
              mind.
            </p>
          </div>
          {/* button */}
          {/* <div className="items-end hidden lg:flex">
            <Link href="">
              <button className="px-16 py-3 font-semibold transition-all duration-300 ease-in-out border-2 cursor-pointer rounded-xl border-gray-100/80 bg-white/20 bg-opacity-80 bg-clip-padding font-jost backdrop-blur-sm backdrop-filter hover:border-white">
                See More
              </button>
            </Link>
          </div> */}
        </div>

        {/* bottom row */}
        <div className="flex justify-center">
          <div className="-ml-4 flex gap-[48px] overflow-scroll p-4 scrollbar-hide">
            <CategoryCard image="/category1.jpg" />
            <CategoryCard image="/category2.jpg" />
            <CategoryCard image="/category3.png" />
            <CategoryCard image="/category4.jpg" />
            <CategoryCard image="/category5.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
