import { Link } from 'react-router-dom';

const ShowCard = ({ name, id, img, summary }) => {
  const summaryStr = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : '';
  return (
    <div>
      <img src={img} />
      <h1>{name}</h1>
      <div> {summaryStr}</div>
      <Link to={`show/${id}`}>Read More</Link>
    </div>
  );
};

export default ShowCard;
