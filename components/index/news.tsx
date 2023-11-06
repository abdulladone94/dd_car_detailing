import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import NewsCard from './newsCard';

function News() {
  return (
    <section>
      <div className="mx-auto mb-16 max-w-7xl px-6 md:mb-48 md:px-8">
        <div className="mb-16 flex justify-between">
          {/* titles */}
          <div>
            <p className="font-jost text-2xl md:text-6xl">
              Let’s find out the latest <br /> updates about us
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
        <div className="flex items-start">
          <div className="-ml-4 flex gap-[48px] overflow-scroll p-4 scrollbar-hide">
            <NewsCard image="/9.jpg" />
            <NewsCard image="/9.jpg" />
            <NewsCard image="/9.jpg" />
            <NewsCard image="/9.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
