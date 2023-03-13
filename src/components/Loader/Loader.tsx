import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled>
      <div className="pulsar" aria-label="The page is loading"></div>
    </LoaderStyled>
  );
};

export default Loader;
