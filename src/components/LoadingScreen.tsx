import { useEffect, useState } from "react";
import { QrCode } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Progress animation - 3 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3.33; // Reach 100% in ~3 seconds
      });
    }, 100);

    // After 3 seconds, fade out and call onComplete
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        onComplete();
      }, 500); // Fade out duration
    }, 3000); // 3 seconds

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#00BAF2] via-[#0099CC] to-[#012a72] transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center space-y-8 animate-fade-in-up">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center animate-pulse-soft">
              <QrCode className="w-16 h-16 md:w-20 md:h-20 text-white animate-float" />
            </div>
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white/50 animate-spin" style={{ animationDuration: "2s" }} />
          </div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up animation-delay-100">
            QadamPe
          </h1>
          <p className="text-white/80 text-lg md:text-xl animate-fade-in-up animation-delay-200">
            Har Qadam Asaan
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 mx-auto space-y-2 animate-fade-in-up animation-delay-300">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm">{Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  );
};

