import Head from 'next/head';
import Image from 'next/legacy/image';
import car_Image from '../assets/logo/blogo-with-text.png';

function Jewelry() {
  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>DD - Projects</title>
        <link rel="DD icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <div className="container p-4 mx-auto text-center">
        <div className="md:flex md:items-center">
          <Image src={car_Image} alt="Car Image" className="w-16 h-16 mr-4" />
          <div className="text-start ">
            <div className="my-4 text-2xl">CERAMIC COAT PROTECTION</div>
            <div className="flex items-center my-6 text-4xl font-bold">
              Ceramic coat benefits your car by providing long-lasting
              protection, a glossy finish, and making it easier to clean.
            </div>

            <ul className="pl-6 my-2 text-lg list-disc">
              <li>
                Save money and time on your car with Ceramic Coat Protection - a
                professional touch for a perfect shine.
              </li>
              <li>
                Ceramic Coat Protection, unlike regular wax, bonds with your
                cars surface for long-lasting candy-gloss shine, applied by
                skilled professionals.
              </li>
              <li>
                Get your car looking flawless with Ceramic Coat Protection in
                just 60 seconds - the choice for lasting beauty and protection.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jewelry;
