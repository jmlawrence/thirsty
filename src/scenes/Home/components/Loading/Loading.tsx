import s from './Loading.module.scss';

const Loading = ({ count = 15 }: { count?: number }) => {
  let skeletons = [...new Array(count)];

  return (
    <div className={s.wrapper}>
      {skeletons.map((_, idx) => (
        <div className={s.skeletonRow} key={idx}></div>
      ))}
    </div>
  );
};

export default Loading;
