import { useEffect, useRef, useState } from "react";

const GAP = 12;
const HOVER_DELAY = 250;

interface Position {
  top: number;
  left: number;
}

export default function useHoverPosition(width: number, height: number) {
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [position, setPosition] = useState<Position | null>(null);

  function calculatePosition(rect: DOMRect): Position {
    const isLeft = rect.left < window.innerWidth / 1.5;

    return {
      left: isLeft ? rect.right + GAP : rect.left - GAP - width,
      top: Math.min(rect.top, window.innerHeight - height),
    };
  }

  function open() {
    if (!window.matchMedia("(hover: hover)").matches) return;

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (ref.current) {
        setPosition(calculatePosition(ref.current.getBoundingClientRect()));
      }
    }, HOVER_DELAY);
  }

  function close() {
    clearTimeout(timer.current);
    setPosition(null);
  }

  useEffect(() => {
    if (!position) return;

    const handleScroll = () => setPosition(null);
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [position]);

  useEffect(() => () => clearTimeout(timer.current), []);

  return { ref, position, open, close };
}
