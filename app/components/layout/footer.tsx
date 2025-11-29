import Footerlogo from "./footer-logo";
import { footerLogos } from "@/app/connfigs/footerConfig";

const Footer = () => {
  return (
    <>
      <div className="flex justify-around items-center p-5">
        {footerLogos.map((footerLogos) => (
          <Footerlogo key={footerLogos.name} {...footerLogos} />
        ))}
      </div>
    </>
  );
};

export default Footer;
