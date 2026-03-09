/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (ctx: CanvasRenderingContext2D, w: number, h: number, n: number, nt: number) => {
    let i: number;
    let x: number;

    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        // eslint-disable-next-line no-var
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }

    return nt;
  };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    let animationId = 0;
    let nt = 0;

    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      ctx.filter = `blur(${blur}px)`;
    };

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      if (backgroundFill && backgroundFill !== "transparent") {
        ctx.globalAlpha = 1;
        ctx.fillStyle = backgroundFill;
        ctx.fillRect(0, 0, w, h);
      }

      ctx.globalAlpha = waveOpacity || 0.5;
      nt = drawWave(ctx, w, h, 5, nt);
      animationId = requestAnimationFrame(render);
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);
    window.addEventListener("resize", resizeCanvas);
    render();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative isolate w-full overflow-hidden",
        containerClassName
      )}
    >
      <canvas
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      {children ? (
        <div className={cn("relative z-10", className)} {...props}>
          {children}
        </div>
      ) : null}
    </div>
  );
};
