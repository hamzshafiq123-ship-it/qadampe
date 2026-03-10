import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const updateCursor = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const checkPointer = (e: MouseEvent) => {
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const isInteractive =
          element.tagName === "A" ||
          element.tagName === "BUTTON" ||
          element.getAttribute("role") === "button" ||
          element.classList.contains("cursor-pointer") ||
          window.getComputedStyle(element).cursor === "pointer";
        setIsPointer(isInteractive);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCursor(e);
      checkPointer(e);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out"
      style={{
        transform: `translate(${position.x - (isPointer ? 8 : 12)}px, ${position.y - (isPointer ? 8 : 12)}px)`,
      }}
    >
      <div
              className={`rounded-full transition-all duration-200 ${
                isPointer
                  ? "w-4 h-4 bg-[#00BAF2]/90 border-2 border-[#00BAF2]/50 backdrop-blur-sm"
                  : "w-6 h-6 bg-[#00BAF2]/50 border-2 border-[#00BAF2]/40 backdrop-blur-sm"
              }`}
              style={{
                boxShadow: isPointer
                  ? "0 0 20px rgba(0, 186, 242, 0.6), 0 0 40px rgba(0, 186, 242, 0.4), inset 0 0 10px rgba(0, 186, 242, 0.2)"
                  : "0 0 15px rgba(0, 186, 242, 0.5), 0 0 30px rgba(0, 186, 242, 0.3)",
              }}
            >
              {isPointer && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00BAF2]/70 to-[#0099CC]/30" />
              )}
      </div>
    </div>
  );
};
