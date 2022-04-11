import styled from "styled-components";
import { IMG_URL } from "../../constents";
import { mainDesc } from "../styes/GlobalStyled";

const SMainBanner = styled.div`
  height: 80vh;
  background: ${(props) => props.bgUrl} no-repeat center / cover;
  padding: 350px 80px 0 80px;
  position: relative;
`;

const Title = styled.h3`
  font-size: 80px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 9;
`;

const Desc = styled.p`
  max-width: 700px;
  width: 100%;
  font-size: ${mainDesc.fontSize};
  font-weight: ${mainDesc.fontWeight};
  color: ${mainDesc.color};
  margin-top: 30px;
  line-height: ${mainDesc.lineHeight};
  opacity: ${mainDesc.opacty};
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 9;
`;

const BlackBox = styled.div`
  width: 100%;
  height: 80vh;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(0deg, #1d1d1d, transparent);
`;

export const MainBanner = ({ data }) => {
  return (
    <SMainBanner bgUrl={`url(${IMG_URL}${data.backdrop_path})`}>
      <Title>{data.title}</Title>
      <Desc>{data.overview.slice(0, 100) + "..."}</Desc>
      <BlackBox />
    </SMainBanner>
  );
};
