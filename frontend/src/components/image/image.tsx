import React from "react";
import NextImage from "next/image";
import { ImageProps } from "../../types/components/props";

const Image = ({ src, alt }: ImageProps) => {
  return (
    <NextImage
      src={src}
      fill
      style={{
        objectFit: "cover",
      }}
      alt={alt}
    />
  );
};

export default Image;
