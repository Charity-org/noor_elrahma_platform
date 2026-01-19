"use client";

import { useRef, useMemo, useCallback } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);

  const points = useMemo(() => {
    return map.getPoints();
  }, [map]);

  const projectPoint = useCallback(
    (lat: number, lng: number) => {
      // DottedMap returns grid coordinates. We verify the conversion matches current svg scaling (x4).
      const { x, y } = map.getPin({ lat, lng });
      return { x: x * 4, y: y * 4 };
    },
    [map],
  );

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Deduplicate points for rendering
  const uniquePoints = useMemo(() => {
    const map = new Map<string, { x: number; y: number; lat: number; lng: number }>();
    dots.forEach((dot) => {
      const startKey = `${dot.start.lat}-${dot.start.lng}`;
      const endKey = `${dot.end.lat}-${dot.end.lng}`;

      if (!map.has(startKey)) {
        map.set(startKey, {
          ...projectPoint(dot.start.lat, dot.start.lng),
          lat: dot.start.lat,
          lng: dot.start.lng,
        });
      }
      if (!map.has(endKey)) {
        map.set(endKey, {
          ...projectPoint(dot.end.lat, dot.end.lng),
          lat: dot.end.lat,
          lng: dot.end.lng,
        });
      }
    });
    return Array.from(map.values());
  }, [dots, projectPoint]);

  // Main hubs coordinates (approximate)
  const isMainHub = (lat: number, lng: number) => {
    // Senegal: 14.4974, -14.4524
    // Gambia: 13.4432, -15.3101
    // We check for proximity or exact match. Using existing data values.
    return (lat === 14.4974 && lng === -14.4524) || (lat === 13.4432 && lng === -15.3101);
  };

  return (
    <div className="w-full aspect-2/1 xl:aspect-3/1 dark:bg-black bg-white rounded-lg relative font-sans">
      <svg viewBox="0 0 800 400" className="w-full h-full pointer-events-none select-none">
        {points.map((point, i) => (
          <circle
            key={`map-point-${i}`}
            cx={point.x * 4}
            cy={point.y * 4}
            r="0.85"
            className="fill-neutral-300 dark:fill-neutral-800 transition-colors duration-200"
          />
        ))}
      </svg>

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.3 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {uniquePoints.map((point, i) => {
          const isHub = isMainHub(point.lat, point.lng);
          return (
            <g key={`points-group-${i}`}>
              <circle
                cx={point.x}
                cy={point.y}
                r={isHub ? 3 : 2}
                fill={isHub ? "#EAB308" : lineColor} // Gold for hubs
              />
              <circle
                cx={point.x}
                cy={point.y}
                r={isHub ? 3 : 2}
                fill={isHub ? "#EAB308" : lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from={isHub ? "3" : "2"}
                  to={isHub ? "12" : "8"}
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
