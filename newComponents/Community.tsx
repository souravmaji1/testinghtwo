import communityBg from "../public/back.png";

import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";
import Link from "next/link";

function Community() {
  return (
    <section
      className="h-fit w-screen bg-center bg-cover bg-no-repeat md:bg-top md:bg-auto md:flex md:flex-col md:items-center md:justify-center md:py-44 mt-0 md:mt-10"
      style={{
        backgroundImage: `url('${communityBg.src}')`,
      }}
    >
      <h5 className="hidden md:block montrealMedium text-[#FFE925] text-center text-5xl mx-auto ">
        Join Our Community
      </h5>
      <h5 className="block md:hidden montrealMedium text-[#FFE925] text-center text-3xl mx-auto my-10">
        Join Our Community
      </h5>
      <h5 className="block md:hidden text-white text-xl w-10/12 montreal text-center mx-auto mt-3 mb-5">
        Dive into a thriving hub of shared knowledge and innovation, uniting
        with us to shape the future of finance through RWFA DApp. Your
        participation drives our collective journey toward decentralized
        excellence.
      </h5>
      <h5 className="hidden md:block text-white text-2xl w-2/3 montreal text-center mx-auto my-5 px-20">
        Dive into a thriving hub of shared knowledge and innovation, uniting
        with us to shape the future of finance through RWFA DApp. Your
        participation drives our collective journey toward decentralized
        excellence.
      </h5>
      <div className="flex md:hidden flex-row items-center justify-around my-10 px-10">
      <Link href="https://www.facebook.com/profile.php?id=61551673333367">
              <FaFacebook color="#ffffff" size={35} />
            </Link>
            <Link href="https://www.instagram.com/cmax_official/">
              <FaInstagram color="#ffffff" size={35} />
            </Link>
            <Link href="https://www.linkedin.com/company/coliseum-cmax/">
              <TiSocialLinkedinCircular color="#ffffff" size={45} />
            </Link>
            <Link href="https://twitter.com/CMAX_official">
              <FaXTwitter color="#ffffff" size={30} />
            </Link>
      </div>
      <div className="hidden md:flex flex-row items-center justify-around my-16 w-1/2 mx-auto">
      <Link href="https://www.facebook.com/profile.php?id=61551673333367">
              <FaFacebook color="#ffffff" size={35} />
            </Link>
            <Link href="https://www.instagram.com/cmax_official/">
              <FaInstagram color="#ffffff" size={35} />
            </Link>
            <Link href="https://www.linkedin.com/company/coliseum-cmax/">
              <TiSocialLinkedinCircular color="#ffffff" size={45} />
            </Link>
            <Link href="https://twitter.com/CMAX_official">
              <FaXTwitter color="#ffffff" size={30} />
            </Link>
      </div>
    </section>
  );
}

export default Community;
