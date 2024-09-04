import { FC } from 'react';
import { Image } from './ImageBlock.styled';

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
    <Image height={height} width={width}><img src={src} alt={alt} /></Image>
  );
};
