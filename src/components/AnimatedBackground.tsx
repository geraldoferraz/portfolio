import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    const drawGradientWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time * 0.001) * 200,
        canvas.height * 0.3 + Math.cos(time * 0.0015) * 200,
        0,
        canvas.width * 0.3,
        canvas.height * 0.3,
        canvas.width * 0.6
      );
      gradient1.addColorStop(0, "rgba(66, 133, 244, 0.15)");
      gradient1.addColorStop(1, "rgba(100, 150, 255, 0)");

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 0.0012) * 150,
        canvas.height * 0.6 + Math.sin(time * 0.001) * 150,
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        canvas.width * 0.5
      );
      gradient2.addColorStop(0, "rgba(102, 160, 255, 0.12)");
      gradient2.addColorStop(1, "rgba(66, 133, 244, 0)");

      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 0.0008) * 180,
        canvas.height * 0.8 + Math.cos(time * 0.001) * 180,
        0,
        canvas.width * 0.5,
        canvas.height * 0.8,
        canvas.width * 0.4
      );
      gradient3.addColorStop(0, "rgba(66, 153, 225, 0.1)");
      gradient3.addColorStop(1, "rgba(100, 150, 255, 0)");

    
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.globalCompositeOperation = "source-over";

    
      ctx.strokeStyle = "rgba(66, 133, 244, 0.08)";
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = 
            canvas.height * 0.5 +
            Math.sin((x + time) * 0.005 + i) * 100 +
            Math.cos((x + time) * 0.003 + i * 2) * 50;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      time += 1;
      requestAnimationFrame(drawGradientWave);
    };

    drawGradientWave();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
};

export default AnimatedBackground;
