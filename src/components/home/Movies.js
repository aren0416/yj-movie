import { mainTitle } from "../styes/GlobalStyled";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const MovieWrap = styled.div`
  margin-top: 100px;
`;

const Title = styled.h3`
  font-size: ${mainTitle.fontSize};
  font-weight: ${mainTitle.fontWeight};
  margin-bottom: 30px;
`;

const Img = styled.div`
  width: 100%;
  height: 200px;
`;

const MovieTitle = styled.h4`
  font-size: 18px;
  margin-top: 15px;
`;

SwiperCore.use([Navigation]);

const params = {
  spaceBetween: 5.2,
  slidesPerView: 5.5,
};

export const Movies = ({ movieData, title }) => {
  return (
    <MovieWrap>
      <Title>{title}</Title>
      <Swiper modules={[Navigation]} {...params} navigation>
        {movieData.map((now) => (
          <SwiperSlide key={now.id}>
            <Link to={`/detail/${now.id}`}>
              <Img
                style={{
                  background: `url(https://image.tmdb.org/t/p/w500${now.backdrop_path}) no-repeat center / cover`,
                }}
              />
              <MovieTitle>{now.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </MovieWrap>
  );
};
