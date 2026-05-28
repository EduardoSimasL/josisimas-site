"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

type Props = {
  /** Links (permalinks) dos posts do Instagram a exibir. */
  posts: string[];
};

/**
 * Galeria com embeds OFICIAIS do Instagram.
 * Mostra as fotos reais dos posts, ao vivo, sem API/token.
 * Como obter o link: abra o post no Instagram → "..." → "Copiar link".
 */
export default function InstagramFeed({ posts }: Props) {
  useEffect(() => {
    const SCRIPT_ID = "instagram-embed-script";
    const process = () => window.instgrm?.Embeds?.process();

    if (document.getElementById(SCRIPT_ID)) {
      process();
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);
  }, [posts]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {posts.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ margin: 0, maxWidth: 540, width: "100%" }}
        />
      ))}
    </div>
  );
}
