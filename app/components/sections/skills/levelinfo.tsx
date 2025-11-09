"use client";

import React, { use } from "react";
import * as motion from "motion/react-client";
import { useMotionValue } from "motion/react";
import { getLevelDescription } from "@/app/connfigs/levelDescriptionConfig";

export const Levelinfo = () => {
  const barref = React.useRef<HTMLDivElement>(null);
  const [barWidth, setBarWidth] = React.useState(0);

  // ドラッグ位置を管理
  const x = useMotionValue(0);
  const [movedlevel,setmovedlevel] = React.useState(50);
  const [level, setLevel] = React.useState(50);

  // バーの幅を取得
  React.useEffect(() => {
    if (barref.current) {
      setBarWidth(barref.current.offsetWidth);
    }
  }, []);

  // ドラッグ位置からレベルを計算
  React.useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (barWidth > 0) {
        const percentage = Math.max(
          0,
          Math.min(100, (latest / barWidth) * 100),
        );
        setLevel(Math.round(percentage));
      }
    });
    return unsubscribe;
  }, [x, barWidth]);

  // アニメーション完了時にmovedlevelを更新
  React.useEffect(() => {
    const changelevelinfo = x.on('animationComplete', () => {
      setmovedlevel(level);
    });
    return changelevelinfo;
  }, [x,level]);

  // 初期位置を設定
  React.useEffect(() => {
    if (barWidth > 0) {
      x.set((50 / 100) * barWidth);
    }
  }, [barWidth, x]);

  // レベルに応じた説明を取得
  const currentDescription = React.useMemo(() => {
    return getLevelDescription(movedlevel);
  }, [movedlevel]);

  return (
    <>
      <motion.div
        key={movedlevel} // 設定値が変わったらアニメーションを再実行
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6 space-y-2"
      >
        <motion.h2 className="text-xl font-bold dark:text-gray-200">
          {currentDescription.title}
        </motion.h2>
        <motion.p className="text-sm dark:text-gray-400">
          {currentDescription.description}
        </motion.p>
      </motion.div>
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
            <h3 className="text-base font-medium text-black dark:text-gray-200">skills</h3>
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
            Lv. {level}
          </motion.span>
        </div>

        {/* プログレスバー */}

        <div
          ref={barref}
          className="relative h-2 bg-gray-800/80 rounded-full backdrop-blur-sm"
        >
          {/* グロー効果 */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{
              duration: 0.3,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-md"
          />

          {/* メインバー */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{
              duration: 0.3,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="relative h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 rounded-full shadow-lg shadow-blue-500/50"
          >
            {/* ハイライト効果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            {/* ドラッグするやつ */}
            <motion.div
              className="absolute -top-3 h-10 w-10 -mt-1 -ml-5 bg-white rounded-full shadow-lg cursor-pointer"
              drag="x"
              dragConstraints={{ left: 0, right: barWidth }}
              dragElastic={0}
              dragMomentum={false}
              style={{ x }}
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
