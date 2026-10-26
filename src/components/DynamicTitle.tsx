"use client";

import { useEffect } from "react";

export default function DynamicTitle() {
  useEffect(() => {
    const originalTitle = document.title;

    const onVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Hey! Come back!";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return null;
}
