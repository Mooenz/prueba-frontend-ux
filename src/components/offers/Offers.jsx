import { useState } from 'react';
import { Link } from 'react-router-dom';

//data
import places from '../../constants/places.json';

//styles
import styles from './styles.module.scss';
import Menu from '../menu/Menu';

const Offers = () => {
  const [newName, setNewName] = useState(null);

  const HandelNameState = (name) => {
    setNewName(name);
  };

  const {
    offers,
    offers__header,
    offers__body,
    offers__list,
    offers__destination,
    offers__article,
    offers__articleMoscow,
    offers__articlePuertoRico,
    offers__articleHonduras,
    offers__articleTitle,
    offers__articleBody,
    offers__articlePrice,
    offers__menu,
    triangle,
  } = styles;

  return (
    <main className="space-lateral">
      <section className={offers}>
        <section className={offers__header}>
          <h2>Offers</h2>
          <hr></hr>
        </section>
        <section className={offers__body}>
          <section className={offers__list}>
            {places.map(({ place, price, id }) => (
              <article
                className={`${offers__article} ${
                  place === 'moscow'
                    ? offers__articleMoscow
                    : place === 'puerto rico'
                    ? offers__articlePuertoRico
                    : place === 'honduras' && offers__articleHonduras
                }`}
                key={id}
                onClick={() => HandelNameState(place)}
              >
                <div>
                  <p className={offers__articleTitle}>{place}</p>
                  <p className={offers__articleBody}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean in nulla mauris.
                    <Link to="/travel-honduras">more</Link>
                  </p>
                  <p className={offers__articlePrice}>Price ${price}</p>
                </div>
              </article>
            ))}
            <section className={offers__destination}>
              {newName ? <span>Trip to {newName}</span> : <span></span>}
              <hr />
              <p>Chosen destination</p>
            </section>
          </section>
          <Menu />
        </section>
      </section>
    </main>
  );
};

export default Offers;
