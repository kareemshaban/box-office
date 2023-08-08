const ShowMainData = ({ img, name, rating, summary, geners }) => {
  return (
    <div>
      <img src={img ? img.original : 'https://placehold.co/600x400'} />
      <div>
        <h1> {name}</h1>
        <div>{rating || 'N/A'}</div>
        <div dangerouslySetInnerHTML={{ __html: summary }}></div>
        <div>
          Geners :{' '}
          {geners.map(ele => {
            return <span key={ele}> {ele} </span>;
          })}
        </div>
      </div>
    </div>
  );
};
export default ShowMainData;
