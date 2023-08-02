export default function AppTitle(props) {
  const { title = 'Box Office', subTitle = 'Search for Movie or an Actor !' } =
    props;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
}
