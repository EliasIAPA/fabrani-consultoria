import { useEffect, useRef, useState } from 'react';

interface CustomYouTubePlayerProps {
  videoId: string;
  title: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function CustomYouTubePlayer({ videoId, title }: CustomYouTubePlayerProps) {
  const playerRef = useRef<any>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<any>(null);
  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Load YouTube API
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Define callback when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      if (playerRef.current) {
        const newPlayer = new (window as any).YT.Player(playerRef.current, {
          videoId: videoId,
          playerVars: {
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            fs: 0,
            iv_load_policy: 3,
            disablekb: 1,
          },
          events: {
            onStateChange: onPlayerStateChange,
            onReady: onPlayerReady,
          },
        });
        setPlayer(newPlayer);
      }
    };

    return () => {
      if (updateIntervalRef.current) {
        clearInterval(updateIntervalRef.current);
      }
    };
  }, [videoId]);

  const onPlayerReady = () => {
    // Player is ready
  };

  const onPlayerStateChange = (event: any) => {
    if (event.data === (window as any).YT.PlayerState.PLAYING) {
      startProgressUpdate();
    } else {
      if (updateIntervalRef.current) {
        clearInterval(updateIntervalRef.current);
      }
    }
  };

  const startProgressUpdate = () => {
    if (updateIntervalRef.current) {
      clearInterval(updateIntervalRef.current);
    }

    updateIntervalRef.current = setInterval(() => {
      if (player) {
        try {
          const current = player.getCurrentTime();
          const duration = player.getDuration();
          if (duration > 0 && progressBarRef.current) {
            const percentage = (current / duration) * 100;
            progressBarRef.current.style.width = `${percentage}%`;
          }
        } catch (e) {
          // Ignore errors
        }
      }
    }, 100);
  };

  return (
    <div className="flex justify-center mb-12">
      <div 
        className="w-full max-w-4xl rounded-xl overflow-hidden border border-primary/30 shadow-lg relative"
        style={{ aspectRatio: '16/9' }}
      >
        {/* YouTube Player */}
        <div
          ref={playerRef}
          style={{
            width: '100%',
            height: '100%',
          }}
        />

        {/* Custom Progress Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            zIndex: 10,
          }}
        >
          <div
            ref={progressBarRef}
            style={{
              height: '100%',
              backgroundColor: '#D4AF37',
              width: '0%',
              transition: 'width 0.1s linear',
            }}
          />
        </div>
      </div>
    </div>
  );
}
