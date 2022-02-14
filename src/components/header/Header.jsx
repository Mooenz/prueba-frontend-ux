import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

const Header = ({ title, bodyOne, bodyTwo, button }) => {
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
        <div className={header__container}>
          {title && <h1 className={header__title}>{title}</h1>}
          {bodyOne && (
            <p className={header__body}>
              {bodyOne}
              <br />
              {bodyTwo}
            </p>
          )}
          {button && (
            <Link to="/buy-now">
              <button className={header__button}>{button}</button>
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default Header;
