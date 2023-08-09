import { styled } from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../../common/SearchCard';
import { StarIcon } from '../../common/StarIcon';

const ShowCard = ({ name, id, img, summary, starMeOnClick, isStarred }) => {
  const summaryStr = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : '';
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={img} />
      </SearchImgWrapper>
      <h1>{name}</h1>
      <div> {summaryStr}</div>
      <ActionSection>
        <a href={`show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <StarBtn onClick={() => starMeOnClick(id)}>
          <StarIcon active={isStarred} />
          {/* {!isStarred ? 'Star Me' : 'UnStar Me'} */}
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};

export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
