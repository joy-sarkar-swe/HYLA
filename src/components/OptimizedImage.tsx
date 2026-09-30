import Image, { type ImageProps } from 'next/image';
import dimensions from './image-dimensions.json';

type Props = Omit<ImageProps, 'width' | 'height' | 'fill'> & {
  src: string;
};

const imageDimensions: Record<string, number[]> = dimensions;

export default function OptimizedImage({ src, alt, sizes = '100vw', ...props }: Props) {
  const size = imageDimensions[src];
  if (!size) throw new Error(`Missing image dimensions for ${src}`);

  return <Image {...props} src={src} alt={alt} width={size[0]} height={size[1]} sizes={sizes} quality={85} />;
}
