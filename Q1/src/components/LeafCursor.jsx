import { useEffect, useState } from "react";

export default function LeafCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () =>
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
  }, []);

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
      }}
      className="
      fixed
      z-[9999]
      pointer-events-none
      text-xl
      -translate-x-1/2
      -translate-y-1/2
      transition-transform
      duration-75
      "
    >
    🍁
    
    </div>
  );
}