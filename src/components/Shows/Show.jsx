import { useParams } from 'react-router-dom';

const Show = () => {
  const { showId } = useParams();
  return <div>Hello Show Page for showid {showId}</div>;
};
export default Show;
