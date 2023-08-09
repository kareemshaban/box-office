import { styled } from 'styled-components';

const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(item => {
        return (
          <div key={item.person.id} className="cast-item">
            <div className="pic-wrapper">
              <img
                src={
                  item.person.image ? item.person.image.medium : '/actor.png'
                }
              />
            </div>
            <div className="actor">
              {item.person.name} | {item.character.name}
            </div>
          </div>
        );
      })}
    </CastList>
  );
};

export default Cast;

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  .cast-item {
    flex: 1 0 50%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    @media only screen and (max-width: 768px) {
      flex: 1 0 100%;
    }
  }
  .pic-wrapper {
    width: 50px;
    min-width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .actor {
    margin-left: 25px;
  }
`;
