import React, { useEffect } from "react";

function ClickEffect() {
  useEffect(() => {
    const createEffect = (e) => {
      const dot = document.createElement("div");
      dot.className = "click-effect";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      document.body.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 600);
    };

    window.addEventListener("click", createEffect);
    return () => window.removeEventListener("click", createEffect);
  }, []);

  return null; // no visible React element, just a global listener
}

export default ClickEffect;
