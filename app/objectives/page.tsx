"use client";

import { useEffect } from "react";

/** Sends /objectives visitors to the objectives section on the home page. */
export default function ObjectivesIndexPage() {
  useEffect(() => {
    window.location.replace("/#objectives");
  }, []);

  return null;
}
