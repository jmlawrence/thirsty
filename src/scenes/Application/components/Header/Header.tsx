import s from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <div className={s.headerWrapper}>
      <Image
        src='/assets/images/logo.svg'
        width={100}
        height={30}
        alt='Logo'
      />
    </div>
  );
};

export default Header;
