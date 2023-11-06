import Head from 'next/head';
import Image from 'next/legacy/image';
import car_Image from '../assets/logo/blogo-with-text.png';

function Gems() {
  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>Jewel Iconic - Products</title>
        <link rel="Jewel Iconic icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <div className="w-full overflow-hidden">
        <Head>
          <title>Jewel Iconic - Products</title>
          <link
            rel="Jewel Iconic icon"
            href="favicon.png"
            type="image/x-icon"
          />
        </Head>
        <div className="container mx-auto p-4 text-center">
          <div className="md:flex md:items-center">
            <Image src={car_Image} alt="Car Image" className="mr-4 h-16 w-16" />
            <div className="text-start ">
              <div className="my-4 text-2xl">PRESELL DETAILING</div>
              <div className="my-6 flex items-center text-4xl font-bold">
                Spoil your precious car with a luxurious full detailing
                treatment in gold!
              </div>

              <ul className="my-2 list-disc pl-6 text-lg">
                <li>
                  Give your car a taste of luxury with Golden Full Detailing for
                  a stunning transformation.
                </li>
                <li>
                  Car detailing is popular now, making your car look and feel
                  amazing inside and out.
                </li>
                <li>
                  Enjoy a car that is not only beautiful on the outside but also
                  fresh, clean, and protected on the inside.
                </li>
              </ul>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <Image src={car_Image} alt="Car Image" className="mr-4 h-16 w-16" />
            <div className="text-start ">
              <div className="my-4 text-2xl">(GOLDEN)FULL DETAILING</div>
              <div className="my-6 flex items-center text-4xl font-bold">
                Give your cherished car a special treat with Golden Full
                Detailing.
              </div>

              <ul className="my-2 list-disc pl-6 text-lg">
                <li>
                  Discover Golden Full Detailing to spoil your car with luxury
                  and banish dullness.
                </li>
                <li>
                  Car detailing is well-known for enhancing your vehicles look
                  and protection.
                </li>
                <li>
                  With Golden Detail, enjoy a beautiful, clean car that is
                  protected, smooth, and smells fresh.
                </li>
              </ul>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <Image src={car_Image} alt="Car Image" className="mr-4 h-16 w-16" />
            <div className="text-start ">
              <div className="my-4 text-2xl">EXTERIOR DETAILING</div>
              <div className="my-6 flex items-center text-4xl font-bold">
                Full exterior detailing works by thoroughly cleaning and
                restoring your cars outer surfaces to make it shine and look its
                best.
              </div>

              <ul className="my-2 list-disc pl-6 text-lg">
                <li>
                  For a sparkling clean car, Full Exterior Detailing is your top
                  choice!
                </li>
                <li>
                  Car detailing goes beyond basic washing, making your vehicle
                  shine inside and out.
                </li>
                <li>
                  It includes cleaning, polishing, and protecting various parts
                  of your car, leaving it looking like new, thanks to
                  professional techniques and quality products.
                </li>
              </ul>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <Image src={car_Image} alt="Car Image" className="mr-4 h-16 w-16" />
            <div className="text-start ">
              <div className="my-4 text-2xl">INTERIOR DETAILING</div>
              <div className="my-6 flex items-center text-4xl font-bold">
                Experience luxury with Full Interior Detailing!
              </div>

              <ul className="my-2 list-disc pl-6 text-lg">
                <li>
                  Elevate your cars interior with Full Interior Detailing for a
                  touch of class and luxury.
                </li>
                <li>
                  Interior detailing means a thorough cleaning of your cars
                  inside, involving materials like leather, plastic, and more,
                  using techniques like vacuuming and steam-cleaning.
                </li>
                <li>
                  Interior Car Detailing goes beyond looks; it ensures a clean,
                  fresh cabin, improving air quality, preventing operational
                  issues, and ensuring clear visibility for safe driving.
                </li>
              </ul>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <Image src={car_Image} alt="Car Image" className="mr-4 h-16 w-16" />
            <div className="text-start ">
              <div className="my-4 text-2xl">(PLATINUM) PAINT CORRECTION</div>
              <div className="my-6 flex items-center text-4xl font-bold">
                Platinum Full Paint Correction enhances your vehicles appearance
                and protects its paint, giving it a fresh, polished look.
              </div>

              <ul className="my-2 list-disc pl-6 text-lg">
                <li>
                  Want a flawless car? Choose Platinum Full Paint Correction to
                  get rid of imperfections like scratches and swirl marks.
                </li>
                <li>
                  Paint correction is the perfect way to restore your cars shine
                  and get rid of blemishes caused by scratches, water spots, and
                  more. Skilled professionals use the right tools and
                  techniques.
                </li>
                <li>
                  Platinum Full Paint Correction involves multiple stages,
                  starting with removing deep scratches and ending with a fine
                  polishing for a perfect, scratch-free finish that shines under
                  direct sunlight.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gems;
