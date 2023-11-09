import Image from 'next/legacy/image';
import Link from 'next/link';

function Crew() {
  return (
    <section>
      <div className="px-6 mx-auto mb-16 max-w-7xl md:mb-48 md:px-8">
        <div className="flex justify-between mb-8 md:mb-16">
          {/* titles */}
          <div>
            <p className="text-2xl font-jost md:text-6xl">
              Its us who make <br /> things running
            </p>
          </div>
          {/* button */}
          <div className="items-end hidden lg:flex">
            <Link href="">
              <button className="px-16 py-3 font-semibold transition-all duration-300 ease-in-out border-2 cursor-pointer font rounded-xl border-gray-100/80 bg-white/20 bg-opacity-80 bg-clip-padding font-jost backdrop-blur-sm backdrop-filter hover:border-white">
                See More
              </button>
            </Link>
          </div>
        </div>

        <div className="relative h-[163px] w-full rounded-[20px] border-2  border-gray-100/80 transition-all duration-300 ease-in-out hover:border-white md:h-[400px] lg:h-[518px]">
          <Link href="">
            <Image
              src="/crew.png"
              alt="DD crew"
              layout="fill"
              objectFit="cover"
              className="rounded-[20px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Crew;
