"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { footerlogo } from "@/app/types/footerTypes";


const Footerlogo = (footerLogos:footerlogo) => {
  return (
    //コンポーネント分割予定
    <>
      <motion.a
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                animate={{ rotate: 360 }}
                transition={{
                  rotate: {
                    duration: 0.3,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 0.1,
                    ease: "easeOut",
                  },
                }}
                href="https://github.com/GOUKI-Main"
              >
                <Image
                  src={footerLogos.light}
                  alt={footerLogos.alt}
                  width={32}
                  height={32}
                  className="dark:hidden"
                />
                <Image
                  src={footerLogos.dark}
                  alt={footerLogos.alt}
                  width={32}
                  height={32}
                  className="hidden dark:block"
                />
              </motion.a>
    </>
  );
};
export default Footerlogo;
