import { Button } from "@chakra-ui/button";
import { NavLink } from "react-router-dom";
import { ReactComponent as Imagefour0Four } from "../../media/404 Error-rafiki.svg";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Imagefour0Four />
      <Button>
        <NavLink to={"/"}>Go back Home</NavLink>
      </Button>
    </>
  );
};

export default NotFoundPage;
