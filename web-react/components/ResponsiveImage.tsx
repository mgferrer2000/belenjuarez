import React from 'react';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  mobileSrc?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  mobileSrc,
  loading = 'lazy',
  decoding = 'async',
  ...imageProps
}) => (
  <picture className="block">
    {mobileSrc && <source media="(max-width: 767px)" srcSet={mobileSrc} type="image/webp" />}
    <img loading={loading} decoding={decoding} {...imageProps} />
  </picture>
);

export default ResponsiveImage;
