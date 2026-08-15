import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Atakan Eryıldız — Senior Full-Stack Developer",
    short_name: "Atakan Eryıldız",
    description:
      "Senior full-stack developer building mobile and web products with Flutter, Next.js/React, and native iOS/Swift.",
    start_url: "/en",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
