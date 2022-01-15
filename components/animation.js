import lottie from 'lottie-web';
import { useEffect, useRef } from "react";

export function Animation({ dataPath }) {
  const lottieWraprref = useRef(null);

  useEffect(() => {
    if (lottie && lottieWraprref.current) {
      const animation = lottie.loadAnimation({
        container: lottieWraprref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: dataPath,
        rendererSettings: {
          title: 'Test title',
          description: 'Test description'
        }
      });

      return () => {
        animation.destroy();
      };
    }
  }, [dataPath]);

  return (
    <div ref={lottieWraprref} style={{ width: 900 }} />
  );
}