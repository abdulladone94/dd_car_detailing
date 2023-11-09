import Image from 'next/legacy/image';
import Link from 'next/link';

import logo_round from '../../assets/logo/blogo-with-text.png';

// icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'Changelog', href: '#' },
      // { title: 'Docs', href: '#' },
      // { title: 'Linear Method', href: '#' },
      // { title: 'Download', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Customers', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Community', href: '#' },
      { title: 'Contact', href: '#' },
      { title: 'DPA', href: '#' },
      { title: 'Terms of service', href: '#' },
    ],
  },
  // {
  //   title: 'Developers',
  //   links: [
  //     { title: 'API', href: '#' },
  //     { title: 'Status', href: '#' },
  //     { title: 'GitHub', href: '#' },
  //   ],
  // },
];

function Footer() {
  return (
    <footer className="w-full overflow-hidden border-t border-white/[0.2] bg-[#000B29] py-6 font-jost text-xl">
      <div className="flex items-center justify-start w-4/5 mx-auto mt-12 sm:mx-auto">
        {/* leftside */}
        <div className=" h-[80px] w-[145px] cursor-pointer">
          <Link href="/">
            <Image src={logo_round} alt="DD logo" objectFit="contain" />
          </Link>
        </div>
      </div>
      <div className="mx-auto my-12 flex max-w-[1400px] flex-col justify-between text-white lg:flex-row">
        <div className="flex flex-1 flex-col items-center justify-start px-8 lg:w-[35%]">
          {/* paragraphs */}
          <div className="w-full text-base font-thin ">
            <p>DD Where your ride gets the royal treatment.</p>
            {/* <p className="mt-6">
              {' '}
              our mission is to craft exquisite, timeless, and extraordinary car
              detailing that transcend the boundaries.
              <br />
              Where your cars potential is realized,
            </p> */}
            <p className="mt-6">contact@ddcardetailing.com</p>
            <p className="mt-2">+61435717073</p>
            <p className="mt-2">Geelong, Australia</p>
          </div>
          {/* social links */}
          <div className="flex items-center justify-start w-full py-2 mt-10 space-x-4 md:py-0">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/jewel-iconic/"
            >
              <LinkedInIcon />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/jewel-iconic/"
            >
              <FacebookIcon />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/jewel-iconic/"
            >
              <TwitterIcon />
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap px-8 text-base font-thin md:w-[65%] md:flex-nowrap lg:flex lg:justify-center ">
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[15rem] lg:flex-col"
            >
              <h3 className="mb-3 font-medium">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title} className="[&_a]:last:mb-0">
                    <Link
                      className="block mb-3 text-white transition-colors hover:text-off-white"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
