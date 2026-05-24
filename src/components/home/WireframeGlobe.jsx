import React, { useEffect, useRef } from 'react';

// Particle-based wireframe globe purely with canvas
export default function WireframeGlobe({ size = 380 }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = size;
    const H = size;
    canvas.width = W;
    canvas.height = H;

    const cx = W / 2;
    const cy = H / 2;
    const R = W * 0.42;

    // Generate particles on sphere surface
    const particles = [];
    const N = 280;
    for (let i = 0; i < N; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      particles.push({ theta, phi, val: Math.random() < 0.5 ? '1' : '0' });
    }

    let angle = 0;

    function project(theta, phi, rot) {
      const x = R * Math.sin(theta) * Math.cos(phi + rot);
      const y = R * Math.cos(theta);
      const z = R * Math.sin(theta) * Math.sin(phi + rot);
      return { x: cx + x, y: cy - y, z };
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      angle += 0.003;

      // Sort by z for depth
      const projected = particles.map((p) => {
        const pos = project(p.theta, p.phi, angle);
        return { ...pos, val: p.val };
      });
      projected.sort((a, b) => a.z - b.z);

      projected.forEach(({ x, y, z, val }) => {
        const depthFactor = (z + R) / (2 * R);
        const alpha = 0.15 + depthFactor * 0.65;
        const fontSize = 7 + depthFactor * 4;
        ctx.font = `${fontSize}px monospace`;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fillText(val, x, y);
      });

      // Draw latitude/longitude lines
      ctx.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx.lineWidth = 0.5;
      const latLines = 8;
      const lngLines = 10;
      for (let l = 0; l < latLines; l++) {
        const theta = (Math.PI / latLines) * l;
        ctx.beginPath();
        for (let s = 0; s <= 64; s++) {
          const phi = (2 * Math.PI * s) / 64;
          const pos = project(theta, phi, angle);
          if (pos.z < 0) { ctx.moveTo(pos.x, pos.y); continue; }
          s === 0 ? ctx.moveTo(pos.x, pos.y) : ctx.lineTo(pos.x, pos.y);
        }
        ctx.stroke();
      }
      for (let l = 0; l < lngLines; l++) {
        const phi = (2 * Math.PI * l) / lngLines;
        ctx.beginPath();
        for (let s = 0; s <= 64; s++) {
          const theta = (Math.PI * s) / 64;
          const pos = project(theta, phi, angle);
          if (pos.z < 0) { ctx.moveTo(pos.x, pos.y); continue; }
          s === 0 ? ctx.moveTo(pos.x, pos.y) : ctx.lineTo(pos.x, pos.y);
        }
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="opacity-80"
      style={{ width: size, height: size }}
    />
  );
}