import { Link, useParams } from 'react-router-dom';
import { getShowById } from '../../api/shows';
import { useQuery } from 'react-query';
import ShowMainData from './ShowMainData';
import Details from './Details';
import Seasons from './Seasons';
import Cast from './Cast';
import { styled } from 'styled-components';

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
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/"> Go back to home</Link>
        </BackHomeWrapper>

        <ShowMainData
          img={showData.image}
          name={showData.name}
          rating={showData.rating.average}
          summary={showData.summary}
          geners={showData.genres}
        />
        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons</h2>
          <div>
            <Seasons seasons={showData._embedded.seasons} />
          </div>
        </InfoBlock>
        <InfoBlock>
          <h2>Cast</h2>
          <div>
            <Cast cast={showData._embedded.cast} />
          </div>
        </InfoBlock>
      </ShowPageWrapper>
    );
  }
  return <div> Loading data</div>;
};
export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
