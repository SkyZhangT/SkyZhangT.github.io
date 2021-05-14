import React from "react";
import { useState, useEffect } from "react";

export function useVisited(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver((entries) => {
    setIntersecting(
      (isIntersecting) => entries[0].isIntersecting || isIntersecting
    );
  });

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

export function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver((entries) => {
    console.log(entries[0].isIntersecting);
    setIntersecting(entries[0].isIntersecting);
  });

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
