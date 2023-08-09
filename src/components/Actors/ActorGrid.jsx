import { FlexGrid } from '../../common/FlexGrid';
import ActorCard from './ActorCard';

const ActorGrid = ({ actors }) => {
  console.log(actors);
  return (
    <FlexGrid>
      {actors.map(data => {
        return (
          <ActorCard
            key={data.person.id}
            name={data.person.name}
            gender={data.person.gender}
            birthday={data.person.birthday}
            deathday={data.person.deathday}
            country={data.person.country ? data.person.country.name : ''}
            img={data.person.image ? data.person.image.medium : '/actor.png'}
          />
        );
      })}
    </FlexGrid>
  );
};
export default ActorGrid;
