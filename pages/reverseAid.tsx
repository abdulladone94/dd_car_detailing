import Head from 'next/head';
import Image from 'next/legacy/image';
import car_Image from '../assets/logo/blogo-with-text.png';

function reverseAid() {
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
            <div className="my-4 text-2xl">REVERSE CAMERA INSTALLATION</div>
            <div className="my-6 flex items-center text-4xl font-bold">
              Enhance your safety with Reverse Camera Installation.
            </div>

            <ul className="my-2 list-disc pl-6 text-lg">
              <li>
                A reverse camera offers multiple advantages, including improved
                safety, easy parking, and reduced driving stress.
              </li>
              <li>
                We specialize in reverse camera installation for various
                vehicles, ensuring top-quality systems and efficient
                installations by experienced technicians.
              </li>
              <li>
                Our mobile reverse camera installation service caters to busy
                individuals, providing convenience and accessibility in Geelong
                and nearby areas.
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <Image src={car_Image} alt="Car Image" className="mr-4 h-16 w-16" />
          <div className="text-start ">
            <div className="my-4 text-2xl">PARKING AID INSTALLATION</div>
            <div className="my-6 flex items-center text-4xl font-bold">
              Simplify parking with professional Parking Aid Installation.
            </div>

            <ul className="my-2 list-disc pl-6 text-lg">
              <li>
                Make parking a breeze with professional parking sensor
                installation, including front and reverse sensors, and enjoy the
                convenience of our mobile service.
              </li>
              <li>
                Parking sensor installation offers increased safety and
                efficiency by preventing collisions and helping you park with
                ease using ultrasonic technology.
              </li>
              <li>
                We specialize in tailored parking sensor installations for
                various vehicle makes and models, ensuring maximum accuracy.
              </li>
              <li>
                As the top parking sensor installer in Geelong, our experienced
                team ensures quality and reliability in every installation.
              </li>
              <li>
                Opt for mobile parking sensor installation for added
                convenience, saving you time and effort while getting the best
                service in Geelong and Melbourne.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default reverseAid;
