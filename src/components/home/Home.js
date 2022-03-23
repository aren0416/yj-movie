import { PageTitle } from "../PageTitle";
import { movieApi } from "../../api";

console.log(movieApi.nowPlaying());

export const Home = () => {
  return (
    <>
      <PageTitle title={"Home"} />
      <h1>Home</h1>
    </>
  );
};
