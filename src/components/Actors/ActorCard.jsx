import { Link } from 'react-router-dom';

const ActorCard = props => {
  const { name, img, gender, country, birthday, deathday } = props;

  return (
    <div>
      <img src={img} />
      <h1>
        {name} {!!gender && `(${gender})`}
        <p> {country ? `Comes from ${country}` : 'No country Known'} </p>
        {!!birthday && `Born on ${birthday}`}
        <p> {deathday ? `Died on ${deathday}` : 'Alive'}</p>
      </h1>
      <Link to="/">Read More</Link>
    </div>
  );
};

export default ActorCard;
