import { Link } from 'react-router-dom';

const LINKS = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Starred',
    to: '/stared',
  },
];
const Navs = () => {
  return (
    <div className="navs">
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}> {item.text} </Link>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navs;
