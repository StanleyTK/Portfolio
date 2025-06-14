import { useEffect, useRef } from "react";

/**
 * Full-screen Vanta Rings background (tuned for smoothness).
 */
export default function Vanta() {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (window.VANTA && typeof window.VANTA.BIRDS === "function") {
      const effect = window.VANTA.BIRDS({
        el: vantaRef.current,     // use the actual node, not a selector
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x242450,
        color1: 0xff3aa2,
        color2: 0x1cd91c,
        wingSpan: 17.00,
        speedLimit: 0.5,
        separation: 150.00,
        alignment: 77.00,
        cohesion: 82.00,
        quantity: 3.00
      });

      return () => effect?.destroy();
    }
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}