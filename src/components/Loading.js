import { Plane } from "react-loader-spinner";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Wrap>
      <Plane
        color="crimson"
        secondaryColor="salmon"
        ariaLabel="loading-indicator"
      />
    </Wrap>
  );
};
