import Head from 'next/head';
import Image from 'next/legacy/image';
import car_Image from '../assets/logo/blogo-with-text.png';

function Company() {
  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>DD - Company</title>
        <link rel="DD icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <div className="container p-4 mx-auto text-center">
        <div className="md:flex md:items-center">
          <Image src={car_Image} alt="Car Image" className="w-16 h-16 mr-4" />
          <div className="text-start ">
            <div className="my-4 text-2xl">DASH CAM INSTALLATION</div>
            <div className="flex items-center my-6 text-4xl font-bold">
              Ensure safety and record your journeys with professional Dash Cam
              Installation.
            </div>

            <ul className="pl-6 my-2 text-lg list-disc">
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
