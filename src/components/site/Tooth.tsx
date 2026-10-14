type ToothProps = { className?: string; size?: number };

export function Tooth({ className, size = 24 }: ToothProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4c-3-2-7-2-8 2-1 3 1 6 2 10 1 5 3 6 4 1 .6-3 3.4-3 4 0 1 5 3 4 4-1 1-4 3-7 2-10-1-4-5-4-8-2Z" />
      <path d="M9 3c1 2 3 3 5 3" />
    </svg>
  );
}
