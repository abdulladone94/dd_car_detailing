import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import NewsCard from './newsCard';

function News() {
  return (
    <section>
      <div className="px-6 mx-auto mb-16 max-w-7xl md:mb-48 md:px-8">
        <div className="flex justify-between mb-16">
          {/* titles */}
          <div>
            <p className="text-2xl font-jost md:text-6xl">
              {/* Let’s find out the latest <br /> updates about us */}
              Plus Benefits with <br /> DD CAR DETAILING
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
            <NewsCard
              content="Door step Services"
              image="https://plus.unsplash.com/premium_photo-1661499704347-7851c4696ddd?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <NewsCard
              content="Quick and Trusted"
              image="https://plus.unsplash.com/premium_photo-1661499704347-7851c4696ddd?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <NewsCard
              content="Quality with Qualified"
              image="https://plus.unsplash.com/premium_photo-1661499704347-7851c4696ddd?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <NewsCard
              content="Available 24/7 open"
              image="https://plus.unsplash.com/premium_photo-1661499704347-7851c4696ddd?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
