const ShowCard = ({ name, id, img, summary, starMeOnClick, isStarred }) => {
  const summaryStr = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : '';
  return (
    <div>
      <img src={img} />
      <h1>{name}</h1>
      <div> {summaryStr}</div>
      <a href={`show/${id}`} target="_blank" rel="noreferrer">
        Read More
      </a>
      <button onClick={() => starMeOnClick(id)}>
        {!isStarred ? 'Star Me' : 'UnStar Me'}
      </button>
    </div>
  );
};

export default ShowCard;
