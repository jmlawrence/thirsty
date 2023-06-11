import { Drink } from '@/types/drinks';
import s from './ListItem.module.scss';
import Image from 'next/image';
import { RightChevron } from '@/components/icons/RightChevron';
import Link from 'next/link';

const ListItem = ({
  drink: { strDrinkThumb, strDrink, idDrink },
}: {
  drink: Drink;
}) => {
  return (
    <Link
      className={s.itemWrapper}
      href={`drink/${idDrink}`}
    >
      <div className={s.leftContent}>
        {strDrinkThumb.length > 10 ? (
          <>
            <img
              // src={'assets/images/logo.svg'}
              src={strDrinkThumb}
              width={40}
              height={40}
              alt={`Thumbnail of ${strDrinkThumb}`}
              className={s.thumbnail}
            />
          </>
        ) : (
          <div>N/A</div>
        )}
        <div className={s.label}>{strDrink}</div>
      </div>
      <div className={s.rightContent}>
        <RightChevron className={s.chevronIcon} size={40} />
      </div>
    </Link>
  );
};

export default ListItem;
