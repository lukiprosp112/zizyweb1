interface ZizyLogoProps {
  className?: string;
  size?: number;
}

const ZizyLogo = ({ className = "", size = 40 }: ZizyLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zizy Logo"
    >
      {/* First Z - Background */}
      <path
        d="M15 20H65L25 70H75"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />
      {/* Second Z - Overlapped with offset */}
      <path
        d="M25 30H75L35 80H85"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary opacity-60"
      />
    </svg>
  );
};

export default ZizyLogo;
