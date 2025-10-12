import React from 'react';
import type { VideoCardProps } from '../interfaces/VideoCardProps';

const VideoCard: React.FC<VideoCardProps> = ({
  src,
  width = '100%',
  height = 'auto',
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  poster,
  className,
}) => (
  <video
    src={src}
    width={width}
    height={height}
    controls={controls}
    autoPlay={autoPlay}
    loop={loop}
    muted={muted}
    poster={poster}
    className={className}
  >
    <track kind="captions" srcLang="en" label="English captions" src="" default />
    Your browser does not support the video tag.
  </video>
);

export default VideoCard;
