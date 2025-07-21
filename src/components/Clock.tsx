// Clock.tsx
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(); 
  };

  return (
    <div className="text-4xl font-mono  text-white ">
      {formatTime(time)}
    </div>
  );
}
