import ActorCard from './ActorCard';

const ActorGrid = ({ actors }) => {
  console.log(actors);
  return (
    <div>
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
    </div>
  );
};
export default ActorGrid;
