"use client";

/* ─────────────────────────────────────────────────────────────
   HexLattice — a quiet geometric field built from the hexagon
   of the Fuutura mark. Used as slide decoration only: it never
   competes with type, and stays well below the guidelines'
   contrast thresholds.
───────────────────────────────────────────────────────────── */

/** Flat-top hexagon path for a given centre and circumradius. */
function hexPath(cx: number, cy: number, r: number) {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i);
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return `M${pts.join("L")}Z`;
}

interface HexLatticeProps {
  /** Stroke colour. Defaults to deep blue. */
  color?: string;
  /** Base opacity of the whole field. */
  opacity?: number;
  /**
   * Placement preset.
   *  · "corner"  — a nest of hexagons bleeding off the right edge
   *  · "band"    — a horizontal run along the lower field
   *  · "single"  — one outsized outline, centred right
   */
  variant?: "corner" | "band" | "single";
}

export default function HexLattice({
  color = "#0072AA",
  opacity = 0.09,
  variant = "corner",
}: HexLatticeProps) {
  return (
    <div
      className="hex-field"
      aria-hidden="true"
      style={{ opacity, zIndex: 1 }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {variant === "corner" && (
          <g stroke={color} strokeWidth="1.1">
            <path d={hexPath(880, 190, 250)} />
            <path d={hexPath(880, 190, 185)} />
            <path d={hexPath(880, 190, 120)} />
            <path d={hexPath(880, 190, 55)} strokeWidth="1.6" />
            <path d={hexPath(700, 470, 105)} />
            <path d={hexPath(700, 470, 58)} />
            <path d={hexPath(560, 300, 42)} />
          </g>
        )}

        {variant === "band" && (
          <g stroke={color} strokeWidth="1.1">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <path key={i} d={hexPath(90 + i * 135, 520, 68)} />
            ))}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <path key={`b${i}`} d={hexPath(157 + i * 135, 520 - 59, 68)} />
            ))}
          </g>
        )}

        {variant === "single" && (
          <g stroke={color} strokeWidth="1.4">
            <path d={hexPath(760, 300, 300)} />
            <path d={hexPath(760, 300, 205)} />
          </g>
        )}
      </svg>
    </div>
  );
}
