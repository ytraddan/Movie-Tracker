"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps extends Omit<ImageProps, "src" | "onError"> {
  src: string | null;
  fallback: string;
}

export default function ImageWithFallback({
  src,
  fallback,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src || fallback);

  return (
    <Image
      src={imgSrc}
      onError={() => setImgSrc(fallback)}
      alt={alt}
      {...props}
    />
  );
}
