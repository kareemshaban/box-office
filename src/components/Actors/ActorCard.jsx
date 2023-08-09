import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../../common/SearchCard';

const ActorCard = props => {
  const { name, img, gender, country, birthday, deathday } = props;

  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={img} />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p> {country ? `Comes from ${country}` : 'No country Known'} </p>
      {!!birthday && `Born on ${birthday}`}
      <p> {deathday ? `Died on ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};

export default ActorCard;
