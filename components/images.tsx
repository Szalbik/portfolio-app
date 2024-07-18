import Image from 'next/image';
import { siteConfig } from '@/config/site';

type ImageProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Images = {
  logo: ({ src = "/avatar_right.png", alt = siteConfig.author, width = 24, height = 24, ...props }: ImageProps) => (
    <Image src={src} alt={alt} width={width} height={height} {...props} />
  ),
};
