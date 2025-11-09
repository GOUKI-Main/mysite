export type LevelDescription = {
  minLevel: number;
  maxLevel: number;
  title: string;
  description: string;
};

export const levelDescriptions: LevelDescription[] = [
  {
    minLevel: 0,
    maxLevel: 0,
    title: "学習予定",
    description: "今後学習していきたい内容",
  },
  {
    minLevel: 1,
    maxLevel: 1,
    title: "概念理解準備中",
    description: "まだ実践経験はなく、概要を学んでいる段階です。",
  },
  {
    minLevel: 2,
    maxLevel: 10,
    title: "概念理解",
    description: "基本的な概念を理解しているレベルです。座学のみ。",
  },
  {
    minLevel: 11,
    maxLevel: 30,
    title: "基礎レベル",
    description:
      "基礎的な知識を持ち、指導のもとで開発作業を進められるレベル",
  },
  {
    minLevel: 31,
    maxLevel: 60,
    title: "中級レベル",
    description:
      "AI支援を活用しながら、一般的な開発タスクをこなせるレベル。",
  },
  {
    minLevel: 61,
    maxLevel: 80,
    title: "上級レベル",
    description:
      "独力で一般的な開発タスクをこなせるレベル",
  },
  {
    minLevel: 81,
    maxLevel: 99,
    title: "指導者レベル",
    description:
      "指導者として他者を導けるレベル",
  },
  {
    minLevel: 100,
    maxLevel: 100,
    title: "神",
    description:
      "神",
  },
];

// レベルに応じた説明を取得する関数
export const getLevelDescription = (level: number): LevelDescription => {
  const description = levelDescriptions.find(
    (desc) => level >= desc.minLevel && level <= desc.maxLevel,
  );

  // デフォルト値（念のため）
  return description || levelDescriptions[2]; // 中級レベルをデフォルトに
};
