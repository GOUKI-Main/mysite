"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const About = () => {
  const containerVariants = {
      hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
          opacity: 1,
          y: 0,
      transition: {
          duration: 0.6,
      },
    },
};

  return (
    <div>   
    <motion.div
      className="w-full px-6 md:px-16 lg:px-32 py-20 space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Profile Section */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

          <div className="flex-1 space-y-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              GOUKI
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Full Stack Developer
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              こんにちは！GOUKIです。とにかくITが好きで、いろいろな技術に触りたくなってしまいます。<br/>
              今まで趣味でWebや電子工作などいろいろなものに触れてきましたが、
              これからは仕事としてITに携わるために、本格的に勉強を始めました。<br />
              主にフロントエンドを先に勉強しつつ、インフラにも触りフルスタックに学んでいます。<br />
              現在は鉄道会社に勤めていてITは未経験ですが、趣味で触っていたためそれなりに知識はあると思います。<br />
              esp32を用いて会社の事務所内だけで使えるローカルネットワークを構築し、webアプリケーションの運用も経験しています。<br />
              会社内のプレゼン大会で優勝経験があります。プレゼン能力や説明力、言語化能力にも自信があります。<br />

            </p>
          </div>
        </div>
      </motion.section>
        {/* Contact Section */}
        <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400">
            連絡先
        </h2>
        <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
                href="https://twitter.com/messages/compose?recipient_id=YOUR_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity"
            >
                <FaXTwitter className="text-2xl" />
                <span className="font-semibold">DMで連絡する</span>
            </Link>
            </motion.div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
            お仕事のご依頼や質問など、お気軽にご連絡ください！
        </p>
        </motion.section>
    </motion.div>
    </div>
  );
};

export default About;
