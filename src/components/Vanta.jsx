import { useEffect, useRef, useContext } from "react";
import { AppContext } from "../App";


export default function Vanta() {
  const vantaRef = useRef(null);
  const { theme } = useContext(AppContext);

  useEffect(() => {
    if (window.VANTA && typeof window.VANTA.BIRDS === "function") {
      const effect = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: theme === "dark" ? 0x242450 : 0xe5e5e5,
        color1: theme === "dark" ? 0xff3aa2 : 0x3e8e41,
        color2: theme === "dark" ? 0x1cd91c : 0x00698f,
        wingSpan: 17.00,
        speedLimit: 0.5,
        separation: 150.00,
        alignment: 77.00,
        cohesion: 82.00,
        quantity: 4.00
      });

      return () => effect?.destroy();
    }
  }, [theme]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}