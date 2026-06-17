"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

import { FALLBACK_IMAGE, resolveImagePath } from "@/lib/site-images";

type SafeImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export default function SafeImage({ src, alt, onError, ...props }: SafeImageProps) {
  const normalized = resolveImagePath(src);
  const [currentSrc, setCurrentSrc] = useState(normalized);

  useEffect(() => {
    setCurrentSrc(resolveImagePath(src));
  }, [src]);

  return (
    <Image
      {...props}
      alt={alt}
      src={currentSrc}
      onError={(event) => {
        if (currentSrc !== FALLBACK_IMAGE) {
          setCurrentSrc(FALLBACK_IMAGE);
        }
        onError?.(event);
      }}
    />
  );
}
