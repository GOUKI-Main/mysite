"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "../../../types/skillType";

interface SkillItemProps {
  skill: Skill;
}

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="space-y-2"
    >
      {/* スキル名とレベル */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex-shrink-0 rounded-lg bg-white p-1">
            <Image
              src={skill.iconPath}
              alt={skill.name}
              fill
              className="object-contain p-1"
            />
          </div>
          <h3 className="text-base font-medium dark:text-gray-200">{skill.name}</h3>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.3,
          }}
          className="text-sm font-semibold text-blue-400"
        >
          Lv. {skill.level}
        </motion.span>
      </div>

      {/* プログレスバー */}
      <div className="relative h-2 bg-gray-800/80 rounded-full overflow-hidden backdrop-blur-sm">
        {/* グロー効果 */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1.2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-md"
        />

        {/* メインバー */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1.2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="relative h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 rounded-full shadow-lg shadow-blue-500/50"
        >
          {/* ハイライト効果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillItem;
