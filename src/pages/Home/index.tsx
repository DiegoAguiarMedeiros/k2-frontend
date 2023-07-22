import React from "react";
import Body from "../../components/Body";

interface HomeProps {
  movieTitle: string;
}

const Home: React.FC<HomeProps> = ({ movieTitle }) => {
  console.log("movieTitle", movieTitle);

  return <div>{movieTitle ? <Body movieTitle={movieTitle} /> : null}</div>;
};

export default Home;
