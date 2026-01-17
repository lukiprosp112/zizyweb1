interface GeometricBackgroundProps {
  className?: string;
}

const GeometricBackground = ({ className = "" }: GeometricBackgroundProps) => {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 w-full h-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Beige/Light background gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(210 20% 98%)" />
          <stop offset="100%" stopColor="hsl(40 20% 96%)" />
        </linearGradient>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(199 89% 48%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(199 89% 48%)" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(160 84% 39%)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="hsl(160 84% 39%)" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Base */}
      <rect width="800" height="600" fill="url(#bgGradient)" />

      {/* Large circle - blue */}
      <circle cx="650" cy="150" r="200" fill="url(#blueGradient)" />

      {/* Hexagon - green */}
      <polygon
        points="500,300 560,340 560,420 500,460 440,420 440,340"
        fill="url(#greenGradient)"
      />

      {/* Triangle - blue */}
      <polygon
        points="700,400 780,520 620,520"
        fill="hsl(199 89% 48%)"
        fillOpacity="0.15"
      />

      {/* Small circles */}
      <circle cx="720" cy="280" r="40" fill="hsl(160 84% 39%)" fillOpacity="0.2" />
      <circle cx="580" cy="180" r="25" fill="hsl(199 89% 48%)" fillOpacity="0.25" />

      {/* Squares rotated */}
      <rect
        x="600"
        y="350"
        width="80"
        height="80"
        fill="hsl(199 89% 48%)"
        fillOpacity="0.12"
        transform="rotate(15 640 390)"
      />

      {/* Lines for architecture feel */}
      <line
        x1="450"
        y1="100"
        x2="750"
        y2="100"
        stroke="hsl(199 89% 48%)"
        strokeWidth="1"
        strokeOpacity="0.2"
      />
      <line
        x1="500"
        y1="500"
        x2="800"
        y2="500"
        stroke="hsl(160 84% 39%)"
        strokeWidth="1"
        strokeOpacity="0.15"
      />

      {/* Dots pattern */}
      <circle cx="480" cy="120" r="4" fill="hsl(199 89% 48%)" fillOpacity="0.4" />
      <circle cx="510" cy="140" r="3" fill="hsl(160 84% 39%)" fillOpacity="0.3" />
      <circle cx="540" cy="110" r="5" fill="hsl(199 89% 48%)" fillOpacity="0.35" />
    </svg>
  );
};

export default GeometricBackground;
