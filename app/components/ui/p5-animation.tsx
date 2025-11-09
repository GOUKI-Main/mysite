"use client";

import { useEffect, useRef, useState } from "react";
import type p5 from "p5";

interface AnimatedCirclesProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function AnimatedCircles({
  width,
  height,
  className,
}: AnimatedCirclesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);
  const [dimensions, setDimensions] = useState({
    width: width || 100,
    height: height || 100,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current && !width && !height) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [width, height]);

  useEffect(() => {
    if (!containerRef.current) return;

    const colors = ["#226699", "#dd2e44", "#ffcc4d", "#FFFFFF"];
    let mySeed: number;

    const canvasWidth = width || dimensions.width;
    const canvasHeight = height || dimensions.height;

    import("p5").then((p5Module) => {
      if (!containerRef.current) return;

      const P5Constructor = p5Module.default;

      const sketch = (p: p5) => {
        p.setup = () => {
          p.createCanvas(canvasWidth, canvasHeight);
          p.rectMode(p.CENTER);
          p.ellipseMode(p.CENTER);
          mySeed = p.floor(p.random(1, 1000000));
        };

        p.draw = () => {
          p.clear();
          p.randomSeed(mySeed);

          const mySize = Math.min(canvasWidth, canvasHeight);
          const rotationSpeed = p.map(p.mouseX, 0, canvasWidth, -0.02, 0.02);

          p.push();
          p.translate(canvasWidth / 2, canvasHeight / 2);
          p.strokeWeight(5);

          const signo = p.random([-1, 1]);
          p.rotate(signo * rotationSpeed * p.frameCount);

          for (let i = 1.7; i < 4.5; i += 0.8) {
            drawCircles(p, -mySize / 7, 0, mySize / i);
            drawCircles(p, mySize / 7, 0, mySize / i);
            drawCircles(p, 0, 0, mySize / i);
          }
          p.pop();
        };

        const drawCircles = (p: p5, x: number, y: number, mySize: number) => {
          p.stroke(0);
          const dir = p.random([-1, 1]);
          const rphase = p.random(0, p.TWO_PI);
          const freq = p.map(p.mouseY, 0, canvasHeight, 0.005, 0.04);

          const col1 = p.color(p.random(colors));
          p.fill(col1);
          const temp = p.frameCount;

          const xx = x + (mySize / 2) * p.cos(dir * freq * temp + rphase);
          const yy = y + (mySize / 2) * p.sin(dir * freq * temp + rphase);
          p.strokeWeight(1);
          p.line(x, y, xx, yy);
          p.ellipse(xx, yy, mySize / 8, mySize / 8);

          const col2 = p.color(p.random(colors));
          p.fill(p.red(col2), p.green(col2), p.blue(col2), 100);
          p.ellipse(x, y, mySize / 4, mySize / 4);

          p.fill(100);
          p.ellipse(
            xx,
            yy,
            mySize / 25 + (mySize / 50) * p.sin(0.01 * p.frameCount),
            mySize / 25 + (mySize / 50) * p.sin(0.01 * p.frameCount),
          );
        };
      };

      p5InstanceRef.current = new P5Constructor(sketch, containerRef.current);
    });

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, [width, height, dimensions.width, dimensions.height]);

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
}
