import { PageTitle } from "../PageTitle";
import { movieApi } from "../../api";
import { useEffect } from "react";

//console.log(movieApi.nowPlaying());

export const Home = () => {
  useEffect(() => {
    const movieData = async () => {
      const nowPlayingData = await (await movieApi.nowPlaying()).data.results;
      console.log(nowPlayingData);
    };
    movieData();
  }, []);

  return (
    <>
      <PageTitle title={"Home"} />
      <h1>Home</h1>
    </>
  );
};
