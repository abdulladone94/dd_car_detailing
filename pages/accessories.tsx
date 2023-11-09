import Head from 'next/head';
import Image from 'next/legacy/image';
import car_Image from '../assets/logo/blogo-with-text.png';

function reverseAid() {
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
            <div className="my-4 text-2xl">DRIVING LIGHT INSTALLATION</div>
            <div className="flex items-center my-6 text-4xl font-bold">
              Illuminate your path with professional Driving Light Installation.
            </div>

            <ul className="pl-6 my-2 text-lg list-disc">
              <li>
                DD Car Detailing is your top choice for premium driving light
                installation, car accessories, and car detailing in Geelong and
                Melbourne, offering quality products and services.
              </li>
              <li>
                Do not overlook the importance of driving light installation, as
                it enhances visibility, safety, and the aesthetics of your
                vehicle, making it a must-have service.
              </li>
              <li>
                Our experienced team specializes in driving light installation
                for all vehicle types, using top-quality equipment and ensuring
                quick, hassle-free installations.
              </li>
              <li>
                For added convenience, we offer mobile driving light
                installation, coming to you in Geelong or Melbourne, so you can
                enjoy better visibility without disrupting your day.
              </li>
              <li>
                Experience the DD Auto Installation difference with our
                professional and reliable driving light installation services in
                Geelong and Melbourne. Contact us today to schedule your
                appointment.
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <Image src={car_Image} alt="Car Image" className="w-16 h-16 mr-4" />
          <div className="text-start ">
            <div className="my-4 text-2xl">UHF ANTENNA INSTALLATION</div>
            <div className="flex items-center my-6 text-4xl font-bold">
              Enhance communication with professional UHF Antenna Installation.
            </div>

            <ul className="pl-6 my-2 text-lg list-disc">
              <li>
                DD Car Detailing, a top mobile car detailing and ceramic coating
                provider, delivers premium services with eco-friendly products
                in Geelong and Melbourne, ensuring customer satisfaction.
              </li>
              <li>
                Our dedicated team offers full mobile car detailing services
                across Geelong and Melbourne, coming to your location at your
                convenience, setting the highest quality standards.
              </li>
              <li>
                With our Love it or Free Guarantee, we are committed to 100%
                customer satisfaction, backed by $5,000,000 public liability
                insurance and innovative car detailing techniques.
              </li>
              <li>
                We cover over 300 suburbs in Melbourne and Geelong, making our
                exceptional car detailing services accessible to a wide range of
                customers.
              </li>
              <li>
                DD Car certified, well-trained, and insured technicians ensure
                your vehicle receives the best care, providing peace of mind and
                a fantastic car detailing experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default reverseAid;
