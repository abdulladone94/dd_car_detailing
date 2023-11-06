import Head from 'next/head';
import Image from 'next/legacy/image';
import car_Image from '../assets/logo/blogo-with-text.png';

function Company() {
  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>Jewel Iconic - Company</title>
        <link rel="Jewel Iconic icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <div className="container mx-auto p-4 text-center">
        <div className="md:flex md:items-center">
          <Image src={car_Image} alt="Car Image" className="mr-4 h-16 w-16" />
          <div className="text-start ">
            <div className="my-4 text-2xl">DASH CAM INSTALLATION</div>
            <div className="my-6 flex items-center text-4xl font-bold">
              Ensure safety and record your journeys with professional Dash Cam
              Installation.
            </div>

            <ul className="my-2 list-disc pl-6 text-lg">
              <li>
                Dash Cam Installation keeps you safe by recording your trips,
                which is handy for accidents and insurance claims.
              </li>
              <li>
                With a dash cam, reckless driving is discouraged, making the
                roads safer.
              </li>
              <li>
                Having a dash cam might even lower your insurance costs, giving
                you peace of mind and savings.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
