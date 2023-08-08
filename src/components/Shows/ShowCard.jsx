import { Link } from 'react-router-dom';

const ShowCard = ({ name, id, img, summary, starMeOnClick }) => {
  const summaryStr = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : '';
  return (
    <div>
      <img src={img} />
      <h1>{name}</h1>
      <div> {summaryStr}</div>
      <a href={`show/${id}`} target="_blank" rel="noreferrer">
        Read More
      </a>
      <button onClick={() => starMeOnClick(id)}>Star Me</button>
    </div>
  );
};

export default ShowCard;
