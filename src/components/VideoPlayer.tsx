import React from 'react';

interface VideoPlayerProps {
  src: string;
  onEnded: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, onEnded }) => {
  return (
    <video
      key={src} // Force re-render when src changes
      className="w-full h-auto aspect-video rounded-lg"
      autoPlay
      muted // Autoplay often requires the video to be muted
      onEnded={onEnded}
      playsInline // Important for iOS
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
