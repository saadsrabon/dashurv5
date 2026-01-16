import { motion } from "framer-motion";

interface AbstractArtProps {
  variant?: "circles" | "lines" | "dots" | "grid" | "waves";
  className?: string;
}

export function AbstractArt({ variant = "circles", className = "" }: AbstractArtProps) {
  if (variant === "circles") {
    return (
      <div className={`absolute pointer-events-none ${className}`}>
        <motion.div
          className="absolute w-64 h-64 rounded-full border border-border/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full border border-border/15 -top-16 -left-16"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-[32rem] h-[32rem] rounded-full border border-border/10 -top-32 -left-32"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        />
      </div>
    );
  }

  if (variant === "lines") {
    return (
      <div className={`absolute pointer-events-none overflow-hidden ${className}`}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-border/30 to-transparent"
            style={{
              width: `${150 + i * 50}px`,
              top: `${i * 30}px`,
              left: `${i * 20}px`,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
          />
        ))}
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`absolute pointer-events-none ${className}`}>
        <div className="grid grid-cols-6 gap-6">
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-border/40"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.03, ease: "easeOut" }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={`absolute pointer-events-none ${className}`}>
        <motion.div
          className="w-40 h-40 border border-border/20"
          initial={{ rotate: 45, opacity: 0 }}
          animate={{ rotate: 45, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 border border-border/15"
          initial={{ rotate: 45, opacity: 0 }}
          animate={{ rotate: 45, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    );
  }

  if (variant === "waves") {
    return (
      <div className={`absolute pointer-events-none overflow-hidden ${className}`}>
        <svg width="300" height="100" viewBox="0 0 300 100" fill="none">
          <motion.path
            d="M0 50 Q 75 20 150 50 T 300 50"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            fill="none"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 60 Q 75 30 150 60 T 300 60"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            fill="none"
            strokeOpacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />
        </svg>
      </div>
    );
  }

  return null;
}
