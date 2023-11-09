import styled from "styled-components";
import { colors, sizes } from "../../styles/foundation";

export const Title = () => {
  return (
    <H1>
      TECNOLOGIA
      <br />& SOCIEDADE
    </H1>
  );
};

const H1 = styled.h1`
  text-align: center;
  color: ${colors.white};
  font-size: ${sizes[0].fonts.xl};
  letter-spacing: ${sizes[0].fonts.xs};
`;
