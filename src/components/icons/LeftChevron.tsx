export const LeftChevron = ({
  size = 24,
  className = '',
}: {
  size?: number;
  className?: string;
}): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect fill='none' height='24' width='24' />
      <g>
        <polygon points='17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12' />
      </g>
    </svg>
  );
};
