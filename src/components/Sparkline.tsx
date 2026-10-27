export function Sparkline({
  history,
  width = 110,
  height = 30,
  strokeWidth = 1.4,
  area = false,
}: {
  history: number[];
  width?: number;
  height?: number;
  strokeWidth?: number;
  area?: boolean;
}) {
  const min = Math.min(...history);
  const max = Math.max(...history);
  const span = max - min || max || 1;
  const pad = height * 0.12;
  const n = history.length;
  const pts = history.map((v, i) => {
    const x = (i * width) / (n - 1 || 1);
    const y = pad + (1 - (v - min) / span) * (height - pad * 2);
    return [x, y] as const;
  });
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const fill = `M 0 ${height} L ${line.replace(/ /g, " L ")} L ${width} ${height} Z`;
  const last = pts[pts.length - 1];

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      className="shrink-0 overflow-visible"
    >
      {area && <path d={fill} fill="var(--vellum-deep)" />}
      <polyline
        points={line}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx={last[0]} cy={last[1]} r={2.2} fill="currentColor" />
    </svg>
  );
}
