//styles
import styles from './styles.module.scss';

//images
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

//data
import data from '../../constants/link.json';

const Footer = () => {
  const {
    footer,
    footer__container,
    footer__socialMedia,
    footer__content,
    footer__about,
    footer__links,
    footer__linksTitle,
    mooenz,

  } = styles;

  return (
    <footer className={`space-lateral ${footer}`}>
      <section className={footer__container}>
        <h2>Follow us</h2>
        <div className={footer__socialMedia}>
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>

          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>

          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </div>

        <section className={footer__content}>
          <section className={footer__about}>
            <h3>About Us</h3>
            <p>we want to help passengers to reach their destinations</p>
          </section>

          <section className={footer__links}>
            {data.map(({ title, link1, link2, link3, link4, id }) => (
              <ol key={id}>
                <li className={footer__linksTitle}>{title}</li>
                <li>{link1}</li>
                <li>{link2}</li>
                <li>{link3}</li>
                {link4 && <li>{link4}</li>}
              </ol>
            ))}
          </section>
        </section>
      </section>

      <div className={mooenz}>
        Create by <a href="http://mooenz.me" target="_blank" rel="noopener noreferrer">Mooenz</a>
      </div>
    </footer>
  );
};

export default Footer;
