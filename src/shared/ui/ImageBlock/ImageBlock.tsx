import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type TProps = {
    src: string;
    height?: number;
    width?: number;
    alt?: string;
}

export const ImageBlock:FC<TProps> = ({
  src, height, width, alt = 'src',
}) => {
  return (
    <LazyLoadImage height={height} width={width} src={src} effect="blur" alt={alt} />
  );
};
