import Head from 'next/head';
import Image from 'next/legacy/image';
import car_Image from '../assets/logo/blogo-with-text.png';

function carInstallation() {
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
            <div className="my-4 text-2xl">STEREO SYSTEM INSTALLATION</div>
            <div className="my-6 flex items-center text-4xl font-bold">
              Get the best tunes with professional Stereo System Installation.
            </div>

            <ul className="my-2 list-disc pl-6 text-lg">
              <li>
                Elevate your sound experience with expert Stereo System
                Installation for the best tunes.
              </li>
              <li>
                Make your music come alive with professional Stereo System
                Installation.
              </li>
              <li>
                Enjoy top-notch audio quality by opting for skilled Stereo
                System Installation.
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <Image src={car_Image} alt="Car Image" className="mr-4 h-16 w-16" />
          <div className="text-start ">
            <div className="my-4 text-2xl">HEAD UNIT INSTALLATION</div>
            <div className="my-6 flex items-center text-4xl font-bold">
              Upgrade your car's audio with Head Unit Installation.
            </div>

            <ul className="my-2 list-disc pl-6 text-lg">
              <li>
                We're your top choice for premium head unit installation in
                Geelong and Melbourne, ensuring you receive the finest products
                and services that exceed your expectations.
              </li>
              <li>
                A high-quality head unit is the heart of your car's
                entertainment system, and upgrading to one can transform your
                driving experience with better audio, connectivity, and modern
                features.
              </li>
              <li>
                Enjoy enhanced audio quality and connectivity with a top-notch
                head unit, making your car a hub for music, calls, and
                navigation apps while on the go.
              </li>
              <li>
                Our expert technicians use only the best head unit brands like
                Pioneer, Kenwood, and Alpine to ensure quality, and they offer a
                mobile installation service, bringing convenience to you.
              </li>
              <li>
                We understand your busy schedule, which is why our team is ready
                to install your new head unit wherever you are in Geelong or
                Melbourne, minimizing disruptions to your day.
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <Image src={car_Image} alt="Car Image" className="mr-4 h-16 w-16" />
          <div className="text-start ">
            <div className="my-4 text-2xl">SPEAKERS’ INSTALLATION</div>
            <div className="my-6 flex items-center text-4xl font-bold">
              Enhance your car's sound with Speakers' Installation.
            </div>

            <ul className="my-2 list-disc pl-6 text-lg">
              <li>
                Upgrade your car's audio experience with professional Speakers'
                Installation.
              </li>
              <li>
                Elevate your sound quality with expert Speakers' Installation
                for your vehicle.
              </li>
              <li>
                Enjoy better music on the go by opting for skilled Speakers'
                Installation.
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <Image src={car_Image} alt="Car Image" className="mr-4 h-16 w-16" />
          <div className="text-start ">
            <div className="my-4 text-2xl">AMPLIFIER INSTALLATION</div>
            <div className="my-6 flex items-center text-4xl font-bold">
              Boost your car's audio with Amplifier Installation.
            </div>

            <ul className="my-2 list-disc pl-6 text-lg">
              <li>
                DD Car Detailing offers a range of premium car detailing
                services, including ceramic protection, setting high standards
                for quality and professionalism.
              </li>
              <li>
                Our dedicated team provides full mobile car detailing services
                in Geelong and Melbourne, ensuring your vehicle gets the best
                care anywhere you need.
              </li>
              <li>
                With a commitment to excellence, we provide a risk-free Love it
                or Free Guarantee, full insurance coverage, and stay ahead with
                innovative car detailing techniques, serving over 300 suburbs in
                Melbourne and Geelong.
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <Image src={car_Image} alt="Car Image" className="mr-4 h-16 w-16" />
          <div className="text-start ">
            <div className="my-4 text-2xl">SUBWOOFER INSTALLATION</div>
            <div className="my-6 flex items-center text-4xl font-bold">
              Upgrade your car's bass with Subwoofer Installation.
            </div>

            <ul className="my-2 list-disc pl-6 text-lg">
              <li>
                Pump up the bass in your car with professional Subwoofer
                Installation.
              </li>
              <li>
                Elevate your car's sound quality by choosing expert Subwoofer
                Installation.
              </li>
              <li>
                Enjoy booming, powerful bass in your vehicle with skilled
                Subwoofer Installation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default carInstallation;
