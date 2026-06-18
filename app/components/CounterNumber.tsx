"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion";

interface CounterNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export default function CounterNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 2.2,
  decimals = 0,
  className = "",
}: CounterNumberProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView || !nodeRef.current) return;
    const node = nodeRef.current;

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        node.textContent =
          prefix +
          v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
          suffix;
      },
    });

    return () => controls.stop();
  }, [inView, value, prefix, suffix, duration, decimals]);

  return (
    <span
      ref={ref}
      aria-label={`${prefix}${value}${suffix}`}
      className={className}
    >
      <span ref={nodeRef}>
        {prefix}0{suffix}
      </span>
    </span>
  );
}
