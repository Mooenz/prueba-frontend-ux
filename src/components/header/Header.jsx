import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  const {
    header,
    header__container,
    header__title,
    header__body,
    header__button,
  } = style;

  return (
    <>
      <section className={`${header} space-lateral`}>
        {children}
        <div className={header__container}>
          <h1 className={header__title}>Visit Canada with prices from $800</h1>
          <p className={header__body}>
            Prepare your bags and forget your worries <br />
            to start enjoying your holidays in this fantastic country
          </p>
          <Link to="/buy-now">
            <button className={header__button}>BUY NOW</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;
