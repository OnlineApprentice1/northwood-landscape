import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Northwood Landscape Co. — Barrie, Ontario";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const bgColor = "#1a2e1a";
  const glowColor = "#2d5a2d";
  const accentColor = "#7dc87d";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: bgColor,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative glow circle — top right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            opacity: 0.6,
          }}
        />

        {/* Business name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          Northwood Landscape Co.
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: accentColor,
            lineHeight: 1.4,
            marginBottom: "24px",
          }}
        >
          Professional Landscaping for Simcoe County
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 22,
            color: "#a0a0a0",
            lineHeight: 1.4,
          }}
        >
          Barrie, Ontario
        </div>
      </div>
    ),
    { ...size }
  );
}
