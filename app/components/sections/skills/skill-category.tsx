"use client";

import { motion } from "framer-motion";
import { SkillGroups } from "../../../types/skillGroups";
import { Skill } from "../../../types/skillType";
import SkillItem from "./skill-item";

interface SkillCategoryProps {
  category: SkillGroups;
  skills: Skill[];
  categoryIndex: number;
}

export const SkillCategory = ({
  category,
  skills,
  categoryIndex,
}: SkillCategoryProps) => {
  // スキルが空の場合は表示しない
  if (skills.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* カテゴリヘッダー */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
        className="flex items-center gap-3"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          {category}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </motion.div>

      {/* スキルリスト */}
      <div className="space-y-6">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};
