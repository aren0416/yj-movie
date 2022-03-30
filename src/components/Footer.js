import styled from "styled-components";

const SFooter = styled.footer`
  border-top: 1px solid #555;
  margin-top: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = () => {
  return (
    <SFooter>
      <p>YJMovie &copy; {new Date().getFullYear()}</p>
    </SFooter>
  );
};
