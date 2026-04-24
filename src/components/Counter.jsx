import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const increment = end / (duration * 60); // 60 FPS
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <div ref={ref}>
      {count}{suffix}
    </div>
  );
};

export default Counter;
