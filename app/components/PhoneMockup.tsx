"use client";

import Image from "next/image";

interface PhoneMockupProps {
  /** Path to a /public screenshot rendered inside the screen. */
  src?: string;
  alt?: string;
  /**
   * Height override, any CSS length. Defaults to the global --device-h,
   * which is viewport-driven so mockups scale with the slide.
   */
  height?: string;
  /** Soft elliptical ground shadow beneath the device. */
  plinth?: boolean;
}

/**
 * Clean titanium iPhone frame.
 *
 * The brand's photography page calls for product shots on quiet, light
 * grounds with plenty of space — so the frame stays neutral and lets the
 * screen content carry the colour.
 */
export default function PhoneMockup({
  src,
  alt = "Fuutura app screen",
  height,
  plinth = true,
}: PhoneMockupProps) {
  const device = (
    <div
      className="device-outer"
      style={height ? ({ ["--device-h" as string]: height } as React.CSSProperties) : undefined}
    >
      <div className="device-btn device-vol-up" aria-hidden="true" />
      <div className="device-btn device-vol-down" aria-hidden="true" />
      <div className="device-btn device-power" aria-hidden="true" />

      <div className="device-body">
        <div className="device-screen">
          {src ? (
            <Image src={src} alt={alt} fill unoptimized sizes="320px" />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "#0E0E0E",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );

  if (!plinth) return device;

  return <div className="device-plinth">{device}</div>;
}
