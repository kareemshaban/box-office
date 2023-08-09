import ShowGrid from '../components/Shows/ShowGrid';
import { useGetStarredShows } from '../lib/getStarredShows';

const Started = () => {
  let data = [];
  const result = useGetStarredShows();
  if (result?.length > 0) {
    data = result.map(item => {
      return { show: item };
    });
  }
  return (
    <div className="contact">
      <ShowGrid shows={data} /> :
    </div>
  );
};

export default Started;
