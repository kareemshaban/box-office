import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h2>Home page</h2>
      <Link to="/contact">To Contact Page</Link>
    </div>
  );
};
export default Home;
