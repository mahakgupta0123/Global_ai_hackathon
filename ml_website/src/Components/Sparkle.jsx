import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Sparkle({
  gridSize = 40,
  gridColor = "rgba(148,163,184,.25)",
  dotColor = "rgba(148,163,184,.15)",
  sparkleColor = "#ffffff",
  density = 12,
  maxSparkles = 60,
  className = "",
}) {
  const [sparkles, setSparkles] = useState([]);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const lastSpawnRef = useRef(0);

  // unique id for keyframes scoping (avoid collisions if multiple instances)
  const scopeId = useMemo(
    () => Math.random().toString(36).slice(2, 8),
    []
  );

  // spawn sparkles over time using rAF (smooth & throttled)
  useEffect(() => {
    const lifespan = 1400; // ms
    const spawnInterval = 1000 / Math.max(1, density); // ms between spawns

    const loop = (t) => {
      if (!lastSpawnRef.current) lastSpawnRef.current = t;
      const shouldSpawn = t - lastSpawnRef.current >= spawnInterval;

      // prune old sparkles
      setSparkles((prev) => {
        const now = performance.now();
        return prev.filter((s) => now - s.createdAt < lifespan);
      });

      if (shouldSpawn) {
        lastSpawnRef.current = t;
        // add a sparkle at a random position
        setSparkles((prev) => {
          if (prev.length >= maxSparkles) return prev;

          const el = containerRef.current;
          const rect = el?.getBoundingClientRect();
          const w = rect?.width || window.innerWidth;
          const h = rect?.height || window.innerHeight;

          const size = Math.random() < 0.35 ? 6 : 3; // mix sizes
          const x = Math.random() * w;
          const y = Math.random() * h;

          return [
            ...prev,
            {
              id: Math.random().toString(36).slice(2),
              x,
              y,
              size,
              rot: Math.random() * 360,
              createdAt: performance.now(),
              delay: Math.random() * 200, // slight desync
              scaleTo: 1 + Math.random() * 0.8,
            },
          ];
        });
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [density, maxSparkles]);

  // grid background style (two linear-gradients + dotted intersections)
  const gridStyle = useMemo(
    () => ({
      backgroundImage: `
        linear-gradient(to right, ${gridColor} 1px, transparent 1px),
        linear-gradient(to bottom, ${gridColor} 1px, transparent 1px),
        radial-gradient(circle at center, ${dotColor} 0.5px, transparent 1px)
      `,
      backgroundSize: `${gridSize}px ${gridSize}px, ${gridSize}px ${gridSize}px, ${gridSize}px ${gridSize}px`,
      backgroundPosition: `0 0, 0 0, 0 0`,
    }),
    [gridColor, dotColor, gridSize]
  );

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] ${className}`}
      aria-hidden="true"
    >
      {/* Subtle tinted backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />

      {/* Grid layer */}
      <div className="absolute inset-0 opacity-70" style={gridStyle} />

      {/* Sparkles layer */}
      <div className="absolute inset-0">
        {sparkles.map((s) => (
          <span
            key={s.id}
            className={`absolute block will-change-transform`}
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              transform: `translate(-50%, -50%) rotate(${s.rot}deg)`,
              filter: "drop-shadow(0 0 6px rgba(255,255,255,.6))",
              animation: `${scopeId}-twinkle 1.4s ease-out ${s.delay}ms forwards`,
            }}
          >
            {/* star shape: a cross made from two thin rectangles */}
            <i
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block rounded-full"
              style={{
                width: s.size,
                height: s.size,
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.15) 70%, transparent 72%)",
              }}
            />
            <i
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: s.size * 2.2,
                height: 1,
                backgroundColor: sparkleColor,
                opacity: 0.75,
              }}
            />
            <i
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: 1,
                height: s.size * 2.2,
                backgroundColor: sparkleColor,
                opacity: 0.75,
              }}
            />
          </span>
        ))}
      </div>

      {/* Scoped keyframes for sparkles */}
      <style>{`
        @keyframes ${scopeId}-twinkle {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(.6) rotate(0deg); }
          10%  { opacity: .95; }
          60%  { opacity: .9; }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.4) rotate(45deg); }
        }
      `}</style>
    </div>
  );
}
