"use client";

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import * as motion from "motion/react-client";
import Image from "next/image";

const Footerlogo = () => {
  return (
    //コンポーネント分割予定
    <>
      <div className="flex justify-around items-center p-5">
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
          <FaGithub size={32} />
        </motion.a>
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
          href="https://x.com/GOUKI_Main"
        >
          <FaXTwitter size={32} />
        </motion.a>
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
          href="https://zenn.dev/gouki_main"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://cdn.simpleicons.org/zenn"
            alt="Zenn"
            width={32}
            height={32}
          />
        </motion.a>
      </div>
    </>
  );
};
export default Footerlogo;
