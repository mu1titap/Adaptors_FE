import Image from 'next/image';
import React from 'react';

function FitImage({ src, alt }: { src: string; alt: string }): JSX.Element {
  return (
    <figure className="w-full h-auto overflow-hidden">
      <Image
        alt={alt}
        className="object-fit"
        height={800}
        priority
        src={src}
        width={800}
      />
    </figure>
  );
}

export default FitImage;
