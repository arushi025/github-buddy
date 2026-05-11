import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 20;
const COLORS = [
  "#ff0000", "#ff4500", "#ff8c00", "#ffd700", "#adff2f",
  "#00ff00", "#00fa9a", "#00ced1", "#1e90ff", "#6a5acd",
  "#9370db", "#ff69b4", "#ff1493", "#ff0000",
];

interface Dot {
  x: number;
  y: number;
  age: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dots = useRef<Dot[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dots.current.push({ x: e.clientX, y: e.clientY, age: 0 });
      if (dots.current.length > TRAIL_LENGTH) dots.current.shift();
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.current.forEach((dot, i) => {
        dot.age++;
        const ratio = i / dots.current.length;
        const colorIdx = Math.floor(ratio * (COLORS.length - 1));
        const size = ratio * 12 + 2;
        const alpha = ratio * 0.8;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = COLORS[colorIdx] + Math.round(alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });
      dots.current = dots.current.filter((d) => d.age < 30);
      raf.current = requestAnimationFrame(draw);
    };
    raf.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
};

export default CursorTrail;
