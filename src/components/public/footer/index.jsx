import Image from "next/image";
import styles from "./styles.module.css";
import GoogleMap from "./GoogleMap";
import GetInTouch from "./GetInTouch";
import CopyWriteSection from "./CopyWriteSection";
import Quicklink from "./Quicklink";


const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-4 px-3 overflow-hidden bg-black`}>
      <div className="py-8 max-w-screen-xl mx-auto grid md:grid-cols-11 gap-16">
        {/* ====== Logo ======== */}
        <div className="col-span-3">
          <Image
            className="max-w-full rounded-lg self-center mx-auto"
            src="/images/Logo.jpg"
            alt="logo"
            height={150}
            width={300}
          />
        </div>

        {/* ======== Quick Links ======= */}
        <div className="col-span-4 text-white ml-0 md:ml-10">
  
          <Quicklink />
        </div>

        {/* ======== Get In Touch ========== */}
        <div className="text-white col-span-4">
          <GetInTouch />
        </div>
      </div>

      {/* ======= Copyright section ======= */}
      <div className="border-t border-gray-500">
        <CopyWriteSection />
      </div>
    </footer>
  );
};

export default Footer;
