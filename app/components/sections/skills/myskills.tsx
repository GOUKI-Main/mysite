import { skillsData } from "../../../connfigs/skillconfig";
import { SkillGroups } from "../../../types/skillType";
import { SkillCategory } from "./skill-category";
import { Levelinfo } from "./levelinfo";

const Myskills = () => {
  // カテゴリとスキルの配列に変換
  const categories = Object.entries(skillsData) as [
    SkillGroups,
    (typeof skillsData)[SkillGroups],
  ][];

  return (
    <section className="w-full max-w-4xl mx-auto space-y-12 px-4 py-8">
      <Levelinfo />
      {categories.map(([category, skills], index) => (
        <SkillCategory
          key={category}
          category={category}
          skills={skills}
          categoryIndex={index}
        />
      ))}
    </section>
  );
};

export default Myskills;
