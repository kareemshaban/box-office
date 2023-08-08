import { Link, useParams } from 'react-router-dom';
import { getShowById } from '../../api/shows';
import { useQuery } from 'react-query';
import ShowMainData from './ShowMainData';
import Details from './Details';
import Seasons from './Seasons';
import Cast from './Cast';

const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery(['shows', showId], () =>
    getShowById(showId)
  );

  if (showError) {
    return <div>Sorry something went wrong {showError}</div>;
  }
  if (showData) {
    return (
      <div>
        <Link to="/"> Go back to home</Link>
        <ShowMainData
          img={showData.image}
          name={showData.name}
          rating={showData.rating.average}
          summary={showData.summary}
          geners={showData.genres}
        />
        <h2>Details</h2>
        <Details
          status={showData.status}
          premiered={showData.premiered}
          network={showData.network}
        />
        <h2>Seasons</h2>
        <div>
          <Seasons seasons={showData._embedded.seasons} />
        </div>

        <h2>Cast</h2>
        <div>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }
  return <div> Loading data</div>;
};
export default Show;
