import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";
import { IMG_URL } from "../../constents";
import { Container } from "../Container";
import { Loading } from "../Loading";
import { PageTitle } from "../PageTitle";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
`;

const CoverImg = styled.div`
  width: 50%;
  height: 700px;
`;

const Content = styled.div``;

const Title = styled.h3``;

const ReleaseData = styled.div``;

const Genres = styled.ul`
  list-style: disc;
`;

const RunTime = styled.div``;

const Overview = styled.div``;

export const Detail = () => {
  // const params = useParams();
  // => url 주소의 아이디값을 변수로 가져올때 사용
  // => 비효율적이기에 비구조화 할당 사용함
  // console.log(params);
  // console.log(params.id);
  // =>  console에 id로 나오는 이유는 routes에서 :id라고 했기 때문

  const { id } = useParams();
  // console.log(id);

  // const location = useLocation();
  // console.log(location);
  // => useParams 대신 사용함, 잘 사용하지는 않음

  const navigate = useNavigate();
  // => 원하는 경로로 보낼때 사용

  // console.log(movieApi.detail(id));
  // => movieApi에서 데이터를 가져오고싶지만, 비동기화되어서 사용할 수 없음

  // const detailData = async () => {
  //   console.log(await movieApi.detail(id));
  // };
  // detailData();
  // => mount되는 동안 loading페이지를 넣어줄 수 없음 (데이터 로딩중에 빈화면만 보이게됨)
  // => useEffet를 사용할 것

  const [detailData, setDetailData] = useState();
  // => movieApi의 data를 불러오기위해 사용

  const [loading, setLoading] = useState(true);

  const movieData = async () => {
    // console.log(await movieApi.detail(id));
    // => 이대로 사용해도 되지만, 데이터를 불러오는 사이트가 오류가날때를 대비하여 try, catch 사용할것
    try {
      // console.log(await movieApi.detail(id));
      // => id자리에 임의의 값을 넣어서 error 확인해보기 ("esesdf") 이런식으로 넣어보기
      const { data: detailData } = await movieApi.detail(id);
      setDetailData(detailData);
      // console.log(data);
      setLoading(false);
    } catch (error) {
      // console.log("에러: ", error);
      navigate("/*");
    }
  };
  useEffect(movieData, []);

  console.log(detailData);

  return (
    <>
      <PageTitle title={"Detail"} />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {detailData && (
            <Wrap>
              <CoverImg
                style={{
                  background: `url(${IMG_URL}${detailData.backdrop_path}) no-repeat center / cover`,
                }}
              />
              <Content>
                <Title>{detailData.title}</Title>
                <ReleaseData>개봉일: {detailData.release_date}</ReleaseData>
                <Genres>
                  {detailData.genres.map((gen) => (
                    <li>{gen.name}</li>
                  ))}
                </Genres>
                <RunTime>런타임: {detailData.runtime} 분</RunTime>
                <Overview>{detailData.overview}</Overview>
              </Content>
            </Wrap>
          )}
        </Container>
      )}
    </>
  );
};
