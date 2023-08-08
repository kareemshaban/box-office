const Details = ({ status, premiered, network }) => {
  return (
    <div>
      <p>Status: {status} </p>
      <p>
        Premiered at {premiered} on {network ? network.name : null}
      </p>
    </div>
  );
};
export default Details;
