import s from './EmptyState.module.scss';

const EmptyState = ({
  searchTerm,
}: {
  searchTerm: string;
}) => {
  return (
    <div className={s.wrapper}>
      No results matching &quot;
      <span className={s.emphasis}>{searchTerm}</span>
      &quot;
    </div>
  );
};

export default EmptyState;
