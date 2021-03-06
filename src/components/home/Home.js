import { PageTitle } from "../PageTitle";
import { movieApi } from "../../api";
import { useEffect, useState } from "react";
import { MainBanner } from "./MainBanner";
import { Loading } from "../Loading";
import "../styes/swiper.css";
import { Movies } from "./Movies";
import { Container } from "../Container";
import { useNavigate } from "react-router-dom";

//console.log(movieApi.nowPlaying());
// => api에서 불러온 내용 확인

//console.log(movieApi.popular());

// console.log(movieApi.upComing());

export const Home = () => {
  const [nowPlaying, setNowPlaying] = useState();
  // => 첫 데이터는 필요없기 때문에 useState()안쪽 내용은 없음
  // => setNowPlaying으로 nowPlaying안에는 결국 nowPlayingData가 들어가게됨

  const [popular, setPopular] = useState();

  const [upComing, setUpComing] = useState();

  const [loading, setLoading] = useState(true);
  // => 참이면 로딩페이지를 돌리고, 거짓이면 컨텐츠가 나오도록 작성할 것임

  const navigate = useNavigate();

  const movieData = async () => {
    try {
      //const nowPlayingData = await (await movieApi.nowPlaying()).data.results;
      const {
        data: { results: nowPlayingData },
      } = await movieApi.nowPlaying();
      // console.log(nowPlayingData);
      // => 함수 바깥에서 변수를 인식할 수 없기에 useState사용할것
      setNowPlaying(nowPlayingData);
      // => useState안에 nowPlayingData값을 넣어줌

      // const popularData = await await (await movieApi.popular()).data.results;
      // console.log(popularData);
      const {
        data: { results: popularData },
      } = await movieApi.popular();
      //console.log(popularData);
      setPopular(popularData);

      const {
        data: { results: upComingData },
      } = await movieApi.upComing();
      setUpComing(upComingData);

      setLoading(false);
    } catch (error) {
      navigate("/*");
    }
  };

  useEffect(movieData, []);

  // console.log("현재 상영 영화", nowPlaying);
  // console.log("인기 영화", popular);
  // console.log("개봉 예정 영화", upComing);

  return (
    <>
      <PageTitle title={"Home"} />

      {/* <MainBanner>
        <Title>{nowPlaying[0].title}</Title>
        <Desc>{nowPlaying[0].overview.slice(0, 100) + "..."}</Desc>
      </MainBanner> */}
      {/* => api에서 받아오는 속도보다 읽히는게 빠르기때문에 오류가 생김
      => api에서 받아오는것이 먼저 읽히고 읽힐 수 있도록 해줘야함 */}

      {/* {nowPlaying ? <MainBanner data={nowPlaying[0]} /> : <Loading />} */}

      {loading ? (
        <Loading />
      ) : (
        nowPlaying && (
          <>
            <MainBanner data={nowPlaying[0]} />

            <Container>
              <Movies movieData={nowPlaying} title={"현재 상영 영화"} />
              <Movies movieData={popular} title={"인기 영화"} />
              <Movies movieData={upComing} title={"개봉 예정 영화"} />
            </Container>
          </>
        )
      )}
    </>
  );
};
