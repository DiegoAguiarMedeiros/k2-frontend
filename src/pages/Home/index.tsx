import React from "react";
import Body from "../../components/Body";

interface HomeProps {
  movieTitle: string;
}

const Home: React.FC<HomeProps> = ({ movieTitle }) => {
  return <Body movieTitle={movieTitle} />;
};

export default Home;
