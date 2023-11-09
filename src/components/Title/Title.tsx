import styled from "styled-components";
import { colors, devices, sizes } from "@/styles/foundation";

export const Title = () => {
  return <H1>A Entrega do Futuro!</H1>;
};

const H1 = styled.h1`
  text-align: center;
  color: ${colors.white};
  font-size: ${sizes[0].fonts.xl};
  letter-spacing: ${sizes[0].fonts.xs};
  @media screen and (${devices.md}) {
    font-size: ${sizes[0].fonts.md};
  }
`;
