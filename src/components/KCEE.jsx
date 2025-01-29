import React, { useEffect, useRef, useState } from 'react';
import ni from '/audio/ni.mp3';

const CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function KCEE() {
  const setKeysPressed = useState([])[1];
  const audioRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      setKeysPressed((prevKeys) => {
        const newKeys = [...prevKeys, key];

        if (newKeys.length > CODE.length) {
          newKeys.shift();
        }

        if (JSON.stringify(newKeys) === JSON.stringify(CODE)) {
          if (audioRef.current) {
            audioRef.current.play().catch((err) => {
              console.error('Audio play failed:', err);
            });
          }
        }

        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={ni} />
    </div>
  );
}
