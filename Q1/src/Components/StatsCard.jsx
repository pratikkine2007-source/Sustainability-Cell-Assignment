import { useEffect, useState } from "react";

export default function StatsCard({ icon, value, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);

    const duration = 2500;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center flex-1">
      <div className="text-3xl mb-2">
        {icon}
      </div>

      <h3 className="text-white text-4xl font-bold">
        {count}+
      </h3>

      <p className="text-white/70 text-sm mt-1 text-center">
        {label}
      </p>
    </div>
  );
}