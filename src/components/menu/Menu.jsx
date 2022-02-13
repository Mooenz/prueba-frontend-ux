//data
import options from '../../constants/menu.json';

//styles
import styles from './styles.module.scss';

const Menu = () => {
  const { menu, triangle } = styles;

  return (
    <aside className={menu}>
      <h3>Menu</h3>
      <ol>
        {options.map(({ option, id }) => (
          <li key={id}>
            <span className={triangle}></span>
            {option}
          </li>
        ))}
      </ol>
    </aside>
  );
};

export default Menu;
