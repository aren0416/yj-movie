import { PageTitle } from "../PageTitle";
import { movieApi } from "../../api";
import { useEffect, useState } from "react";

//console.log(movieApi.nowPlaying());

export const Home = () => {
  const [nowPlaying, setNowPlaying] = useState();
  // => 첫 데이터는 필요없기 때문에 useState()안쪽 내용은 없음
  // => setNowPlaying으로 nowPlaying안에는 결국 nowPlayingData가 들어가게됨

  useEffect(() => {
    const movieData = async () => {
      //const nowPlayingData = await (await movieApi.nowPlaying()).data.results;
      const {
        data: { results: nowPlayingData },
      } = await movieApi.nowPlaying();
      // console.log(nowPlayingData);
      // => 함수 바깥에서 변수를 인식할 수 없기에 useState사용할것
      setNowPlaying(nowPlayingData);
      // => useState안에 nowPlayingData값을 넣어줌
    };
    movieData();
  }, []);

  console.log(nowPlaying);

  return (
    <>
      <PageTitle title={"Home"} />
      <h1>Home</h1>
      {nowPlaying.map((play) => (
        <ul>
          <li>
            {play.title}
            <span>{play.backdrop_path}</span>
          </li>
        </ul>
      ))}
    </>
  );
};
