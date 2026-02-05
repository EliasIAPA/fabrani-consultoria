import { useEffect, useRef } from 'react';

export function ConvertAIPlayer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current && !iframeRef.current.dataset.loaded) {
      const src = 'https://scripts.converteai.net/3758b217-bbef-4f2e-a783-8b3253d8c374/players/6984591d3f2c4e4035cfa155/v4/embed.html' + 
                  (location.search || '?') + 
                  '&vl=' + 
                  encodeURIComponent(location.href);
      iframeRef.current.src = src;
      iframeRef.current.dataset.loaded = 'true';
    }
  }, []);

  return (
    <div id="ifr_6984591d3f2c4e4035cfa155_wrapper" style={{ margin: 0, width: '100%', padding: 0, aspectRatio: '16/9' }}>
      <iframe
        ref={iframeRef}
        frameBorder={0}
        allowFullScreen
        src="about:blank"
        id="ifr_6984591d3f2c4e4035cfa155"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '1rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          display: 'block'
        }}
        referrerPolicy="origin"
      />
    </div>
  );
}
