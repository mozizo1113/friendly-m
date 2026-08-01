import { useEffect } from "react";

export default function GlobalAd() {
  useEffect(() => {
    (window as any).atOptions = {
      key: "a28bd4d526acc39b1ba06e1a24ca5ae5",
      format: "iframe",
      height: 300,
      width: 160,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://www.highperformanceformat.com/a28bd4d526acc39b1ba06e1a24ca5ae5/invoke.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}