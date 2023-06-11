export const RightChevron = ({
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
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z' />
    </svg>
  );
};
