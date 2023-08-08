const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(item => {
        return (
          <div key={item.person.id}>
            <img
              src={item.person.image ? item.person.image.medium : '/actor.png'}
            />
            <div>
              {item.person.name} | {item.character.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cast;
