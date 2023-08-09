import ShowGrid from '../components/Shows/ShowGrid';
import { useGetStarredShows } from '../lib/getStarredShows';

const Started = () => {
  const result = useGetStarredShows().map(item => {
    return { show: item };
  });

  return (
    <div className="contact">
      <ShowGrid shows={result} />
    </div>
  );
};

export default Started;
