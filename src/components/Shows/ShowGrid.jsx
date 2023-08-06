import ShowCard from './ShowCard';

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => {
        return (
          <ShowCard
            key={data.show.id}
            name={data.show.name}
            id={data.show.id}
            img={
              data.show.image
                ? data.show.image.medium
                : 'https://placehold.co/600x400'
            }
            summary={data.show.summary}
          />
        );
      })}
    </div>
  );
};
export default ShowGrid;
