import { SkillGroups } from "./skillGroups";

// 個別スキルの型（categoryは持たない）
export interface Skill {
  name: string;
  level: number; // 0~100
  iconPath: string;
}

// カテゴリベースのスキルデータ型
export type SkillsData = Record<SkillGroups, Skill[]>;

// カテゴリとスキルのペア（マッピング用）
export interface CategorySkills {
  category: SkillGroups;
  skills: Skill[];
}

// 後方互換性のため（非推奨）
/** @deprecated Use Skill instead */
export interface skill {
  name: string;
  level: number; // 0~100
  iconPath: string;
  category: SkillGroups;
}
