import Image, { StaticImageData } from 'next/image';
import React from 'react';

function FitImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}): JSX.Element {
  return (
    <figure className={`w-full h-auto overflow-hidden ${className}`}>
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
