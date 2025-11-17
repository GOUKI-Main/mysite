"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AvoidMouseText {
  text: string;
  fontSize?: string;
  fontSizes?: string[];
  influenceRadius?: number;
  pushForce?: number;
  containerClassName?: string;
}

export default function AvoidMouseText({
  text = "It'snnnTest",
  fontSize = "text-6xl md:text-8xl",
  fontSizes,
  influenceRadius = 150,
  pushForce = 80,
  containerClassName = "col-start-1 -col-end-1 row-start-1 -row-end-1",
}: AvoidMouseText) {
  const [pointerPos, setPointerPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isActive, setIsActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 改行で分割して、各行を文字の配列に変換
  const lines = text.split("nnn").map((line) => line.split(""));

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPointerPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setIsActive(true);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPointerPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setIsActive(true);
      }
    };

    const handlePointerLeave = () => {
      setIsActive(false);
    };

    const handlePointerUp = () => {
      setIsActive(false);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("pointermove", handlePointerMove);
      container.addEventListener("pointerdown", handlePointerDown);
      container.addEventListener("pointerleave", handlePointerLeave);
      container.addEventListener("pointerup", handlePointerUp);
      container.addEventListener("pointercancel", handlePointerUp);

      return () => {
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerdown", handlePointerDown);
        container.removeEventListener("pointerleave", handlePointerLeave);
        container.removeEventListener("pointerup", handlePointerUp);
        container.removeEventListener("pointercancel", handlePointerUp);
      };
    }
  }, []);

  // 定数
  const CHAR_WIDTH = 60;
  const LINE_HEIGHT = 80;

  // 文字の中央揃え位置を計算
  const calculateCharPosition = (
    charIndex: number,
    lineIndex: number,
    lineLength: number,
    totalLines: number,
    containerWidth: number,
    containerHeight: number,
  ): { x: number; y: number } => {
    const totalWidth = lineLength * CHAR_WIDTH;
    const totalHeight = totalLines * LINE_HEIGHT;

    const x = charIndex * CHAR_WIDTH - totalWidth / 2 + containerWidth / 2;
    const y = lineIndex * LINE_HEIGHT - totalHeight / 2 + containerHeight / 2;

    return { x, y };
  };

  // ベクトルを正規化して力を適用
  const calculatePushVector = (
    dx: number,
    dy: number,
    distance: number,
  ): { x: number; y: number } => {
    const normalizedForce = (influenceRadius - distance) / influenceRadius;
    const unitX = dx / distance;
    const unitY = dy / distance;

    return {
      x: unitX * normalizedForce * pushForce,
      y: unitY * normalizedForce * pushForce,
    };
  };

  const calculateAvoidance = (
    lineIndex: number,
    charIndex: number,
    lineLength: number,
    totalLines: number,
  ): { x: number; y: number } => {
    if (!isActive || !containerRef.current) {
      return { x: 0, y: 0 };
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const charPos = calculateCharPosition(
      charIndex,
      lineIndex,
      lineLength,
      totalLines,
      containerRect.width,
      containerRect.height,
    );

    // ポインタとの距離ベクトルを計算
    const dx = charPos.x - pointerPos.x;
    const dy = charPos.y - pointerPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // 影響範囲内なら押し出しベクトルを計算
    if (distance > 0 && distance < influenceRadius) {
      return calculatePushVector(dx, dy, distance);
    }

    return { x: 0, y: 0 };
  };

  return (
    <div
      ref={containerRef}
      className={`flex flex-col justify-center overflow-hidden ${containerClassName}`}
    >
      {lines.map((lineChars, lineIndex) => {
        // 行ごとのfontSizeを決定
        const lineFontSize =
          fontSizes && fontSizes[lineIndex] ? fontSizes[lineIndex] : fontSize;

        return (
          <div
            key={`line-${lineIndex}`}
            className="flex gap-1 md:gap-2 justify-center"
          >
            {lineChars.map((char, charIndex) => {
              const avoidance = calculateAvoidance(
                lineIndex,
                charIndex,
                lineChars.length,
                lines.length,
              );

              return (
                <motion.span
                  key={`${lineIndex}-${char}-${charIndex}`}
                  className={`${lineFontSize} font-bold select-none`}
                  style={{
                    textShadow: "0 0 20px rgba(255,255,255,0.5)",
                  }}
                  animate={{
                    x: avoidance.x,
                    y: avoidance.y,
                    rotate: avoidance.x * 0.2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 15,
                    mass: 0.5,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
