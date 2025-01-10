import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";
import "../../globals.css";

export const runtime = "edge"; // Use the Edge runtime for optimal performance

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "När är det 31 januari?";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0017ee",
          color: "#fff",
          fontSize: 80,
          fontFamily: "system",
        }}
      >
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
