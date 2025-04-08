"use client";

import { useEffect } from "react";

export function FixHydrationClient() {
  useEffect(() => {
    // Remove problematic attributes from body tag
    const body = document.body;

    if (body.hasAttribute("br-mode")) body.removeAttribute("br-mode");
    if (body.hasAttribute("saccades-color"))
      body.removeAttribute("saccades-color");
    if (body.hasAttribute("fixation-strength"))
      body.removeAttribute("fixation-strength");
    if (body.hasAttribute("saccades-interval"))
      body.removeAttribute("saccades-interval");

    // Remove problematic style properties
    if (body.style.getPropertyValue("--fixation-edge-opacity"))
      body.style.removeProperty("--fixation-edge-opacity");
    if (body.style.getPropertyValue("--br-line-height"))
      body.style.removeProperty("--br-line-height");
    if (body.style.getPropertyValue("--br-boldness"))
      body.style.removeProperty("--br-boldness");
  }, []);

  return null;
}
