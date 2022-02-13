import { useState } from 'react';
import { Link } from 'react-router-dom';

//data
import navigation from '../../constants/navigation.json';

//style
import style from './style.module.scss';

const Nav = () => {
  const [arrow, setArrow] = useState(false);
  const [active, setActive] = useState('home');

  const handleArrow = () => {
    setArrow(!arrow);
  };

  const handleActive = (tapName) => {
    setActive(tapName);
  };

  let {
    nav,
    nav__logo,
    nav__iconBurger,
    nav__container,
    nav__dropdown,
    nav__dropdownList,
    nav__dropdownIcon,
    nav__dropdownIconActive,
    nav__list,
    nav__tap,
    nav__tapActive,
  } = style;

  return (
    <nav className={nav}>
      <p className={nav__logo}>Airline</p>
      <span className={nav__iconBurger}></span>
      <section className={nav__container}>
        <div className={`${nav__dropdown} ${arrow && nav__dropdownIconActive}`}>
          en
          <span
            className={nav__dropdownIcon}
            onClick={handleArrow}
          ></span>
          <div className={nav__dropdownList}>
            <ol>
              <li>RU - Russian</li>
              <li>DE - German</li>
              <li>FR - French</li>
            </ol>
          </div>
        </div>
        <div className={nav__list}>
          {navigation.map(({ name, id }) =>
            name === 'home' ? (
              <Link
                className={`${nav__tap} ${active === name && nav__tapActive}`}
                onClick={() => handleActive(name)}
                to="/"
                key={id}
              >
                {name}
              </Link>
            ) : (
              <Link
                className={`${nav__tap} ${active === name && nav__tapActive}`}
                onClick={() => handleActive(name)}
                to={`/${name}`}
                key={id}
              >
                {name}
              </Link>
            )
          )}
        </div>
      </section>
    </nav>
  );
};

export default Nav;
