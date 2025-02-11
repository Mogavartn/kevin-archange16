// src/components/pixel-events.tsx
"use client"; // Pour que ce fichier soit traité côté client dans Next.js

import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname(); // Récupère l'URL de la page actuelle
  const searchParams = useSearchParams(); // Récupère les paramètres de l'URL, le cas échéant

  useEffect(() => {
    // Dynamically import react-facebook-pixel
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID); // Remplace "FACEBOOK_PIXEL_ID" par ton ID de pixel Facebook
        ReactPixel.pageView(); // Envoie l'événement "PageView" au Pixel Facebook
      });
  }, [pathname, searchParams]); // Re-exécute chaque fois que l'URL ou les paramètres changent

  return null;
};
