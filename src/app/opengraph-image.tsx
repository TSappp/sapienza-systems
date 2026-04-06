import { ImageResponse } from "next/og";

export const alt = "Sapienza Systems — Restaurant Operations Consultant Boston";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#1c1917",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            color: "#b45309",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            marginBottom: 24,
          }}
        >
          Sapienza Systems
        </div>
        <div
          style={{
            color: "#fafaf9",
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Restaurant Operations Consultant
        </div>
        <div
          style={{
            color: "#a8a29e",
            fontSize: 24,
            marginTop: 24,
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          Practical systems for Boston restaurants and bars. Shift consistency,
          training, SOPs, and manager execution.
        </div>
        <div
          style={{
            color: "#78716c",
            fontSize: 18,
            marginTop: "auto",
          }}
        >
          sapienzasystems.com
        </div>
      </div>
    ),
    { ...size },
  );
}
